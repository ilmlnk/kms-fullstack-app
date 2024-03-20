'use client'

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import axios from 'axios';
import { usePathname, useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { Checkbox } from "@/components/ui/checkbox"
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
import { ChevronLeftIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { signIn } from 'next-auth/react';

const signUpSchema: any = z.object({
    username: z.string(),
    password: z.string()
});

export const ParentSignInForm = () => {
    const t = useTranslations();
    const router = useRouter();
    const pathname = usePathname();
    const language = pathname.split('/')[1];

    const form = useForm<z.infer<typeof signUpSchema>>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            username: "",
            password: ""
        }
    });

    const { isSubmitting, isValid } = form.formState;

    const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
        const user = await axios.get(`/api/parents/${values.username}`);

        const signInResult = await signIn("credentials", {
            username: values.username,
            password: values.password,
            callbackUrl: `/${language}/parent/${user.data.id}/dashboard`,
            redirect: true,
        });

        if (!signInResult?.ok) {
            return toast.error("Invalid credentials");
        }
    }

    return (
        <div className='flex flex-col min-h-screen justify-center items-center '>
            <Button className='absolute top-10 left-10 w-[50px] h-[50px] ' onClick={() => router.back()}>
                <ChevronLeftIcon />
            </Button>
            <div className='max-w-5xl mx-auto h-full p-12 shadow-md rounded-md dark:border-[#1f2937] dark:border-[1px]'>
                <h1 className='text-2xl font-bold'>
                    Login form
                </h1>
                <p className='text-sm text-slate-600 dark:text-slate-500'>
                    {/*Welcome back :)*/}
                </p>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className='mt-4'
                    >
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Username
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            type='username'
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
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Password
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            type='password'
                                            disabled={isSubmitting}
                                            placeholder='Input your password'
                                            {...field}
                                        />

                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className='mt-4 flex items-center space-x-2'>
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Remember me
                            </label>

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
