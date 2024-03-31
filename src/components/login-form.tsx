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
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { Spinner } from './loading-spinner';
import Link from 'next/navigation';

const signUpSchema: any = z.object({
    username: z.string(),
    password: z.string()
});

export const LoginAccount = () => {
    const router = useRouter();
    const pathname = usePathname();
    const language = pathname.split('/')[1];
    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof signUpSchema>>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            username: "",
            password: ""
        }
    });

    const { isSubmitting, isValid } = form.formState;

    const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
        setLoading(true);
        try {
            const signInData = await signIn('credentials', {
                username: values.username,
                password: values.password,
            });
            if (signInData?.ok) {
                toast.success("Login successful");
                setLoading(false);
            }
        } catch (err) {
            setLoading(false);
            toast.error("Something went wrong");
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
                    Welcome back :)
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

                        <div className="text-sm mt-4">
                            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                Forgot password?
                            </a>
                        </div>
                        <div className='grid items-center gap-x-2 mt-4'>
                            <Button
                                type='submit'
                            >
                                Continue
                            </Button>
                        </div>
                        <p className="mt-10 text-center text-sm text-gray-500">
                            Don&apos;t have an account?{' '}
                            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                Sign up
                            </a>
                        </p>
                    </form>
                </Form>
            </div>
            {loading &&
                (<div className='absolute w-[100%] h-[100%] bg-slate-700/50 backdrop-blur-sm'>
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 rounded-md bg-slate-500 shadow-sm'>
                        <Spinner size='large' className='dark:text-slate-200 text-slate-200' />
                    </div>
                </div>)}
        </div>
    );
}
