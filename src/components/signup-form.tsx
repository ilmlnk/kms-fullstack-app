import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Link from 'next/link';
import { Button } from './ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const signUpSchema: any = z.object({
    firstName: z.string()
        .min(2, "Name should have at least 2 characters")
        .max(50, "Name should not exceed 50 characters")
        .refine((value) => /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
            .test(value), "First name is not valid"),

    lastName: z.string()
        .min(2, "Name should have at least 2 characters")
        .max(50, "Name should not exceed 50 characters")
        .refine((value) => /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
            .test(value), "Last name is not valid"),

    idCode: z.string()
        .min(10, "ID code should have at least 10 characters"),

    birthDate: z.date()
        .min(new Date(1900, 0, 1), "Birth date should be after 1900")
        .max(new Date(), "Birth date should be before today"),

    email: z.string()
        .min(1, "Email is required")
        .email("Email is not valid"),

    password: z.string()
        .min(1, "Password is required")
        .min(8, "Password should have at least 8 characters")
        .max(50, "Password should not exceed 50 characters")
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, "Password must contain at least one uppercase letter, one lowercase letter and one number"),

    confirmPassword: z.string()
        .min(1, "Confirm password is required")
        .refine((data) => data === signUpSchema.password, {
            message: "Passwords do not match",
        })
});

export const SignUp = async ({
    params
}: {
    params: {
        userId: string
    }
}) => {
    const router = useRouter();
    const form = useForm<z.infer<typeof signUpSchema>>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            idCode: "",
            birthDate: new Date(),
            email: "",
            password: "",
            confirmPassword: "",
        }
    });

    const { isSubmitting, isValid } = form.formState;

    function onSubmit(values: z.infer<typeof signUpSchema>) {
        console.log(values);
        try {
            const response = axios.post("/api/auth/parent/signup", values);
            router.push(`/user/${params.userId}/dashboard`);
        } catch (error) {

        }
    }

    return (
        <>
            <div>
                <div>
                    <div>
                        <h3>Welcome Back!</h3>
                        <p>To keep connected with us please login
                            with your personal info
                        </p>
                        <Link href={"/sign-in"}>
                            <Button
                            className='border-zinc-500 text-zinc-300
                            hover:border-zinc-200 hover:text-zinc-100
                            transition-colors border rounded-full px-8'
                            >
                                Sign in
                            </Button>
                        </Link>
                    </div>
                    <div className=''>
                        <h3 className='text-center text-2xl
                        font-semibold
                        '>Register here</h3>
                        <div>
                            <Button
                            variant={"outline"}
                            className=''
                            >
                                <FontAwesomeIcon icon="check-square"/>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}