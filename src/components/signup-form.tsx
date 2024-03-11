'use client'

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { DateTimePicker } from './date-time-picker';



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
            .test(value), "Last name is not valid")
    ,


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

export const SignUp = () => {
    const router = useRouter();

    const form = useForm<z.infer<typeof signUpSchema>>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            idCode: "",
        }
    });

    const { isSubmitting, isValid } = form.formState;

    const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
        try {
            const response = await axios.post('/api/auth/parent/signup', values);
            router.push(`/teacher/${response.data.id}/dashboard`);
        } catch (err) {
            toast.error("Something went wrong");
        }
    }

    return (
        <div className='flex flex-col min-h-screen justify-center items-center'>
            <div className='max-w-5xl mx-auto h-full p-8 shadow-md rounded-md'>
                <h1 className='text-2xl font-bold'>
                    Registration form
                </h1>
                <p className='text-sm text-slate-600'>
                    What would you like to name your subject? Don&apos;t worry,
                    you can change this later.
                </p>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className='mt-8'
                    >
                        <div className='grid grid-cols-2 gap-4'>
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            First name
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={isSubmitting}
                                                placeholder='e.g. Alphabets and phonetics'
                                                {...field}
                                            />

                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Last name
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={isSubmitting}
                                                placeholder='e.g. Alphabets and phonetics'
                                                {...field}
                                            />

                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="idCode"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            ID code
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={isSubmitting}
                                                placeholder='e.g. Alphabets and phonetics'
                                                {...field}
                                            />

                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />



                            <FormField
                                control={form.control}
                                name="birthDate"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Birth date
                                        </FormLabel>
                                        <FormControl>
                                            <DateTimePicker/>

                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Email
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={isSubmitting}
                                                placeholder='e.g. Alphabets and phonetics'
                                                {...field}
                                            />

                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Username
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={isSubmitting}
                                                placeholder='Input your username'
                                                {...field}
                                            />

                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Password
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={isSubmitting}
                                                placeholder='Input your password'
                                                {...field}
                                            />

                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Confirm Password
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={isSubmitting}
                                                placeholder='Confirm your password'
                                                {...field}
                                            />

                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className='grid items-center gap-x-2 mt-4'>
                            <Button
                                type='submit'
                            >
                                Continue
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
}