'use client'

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Link from 'next/link';
import axios from 'axios';
import { usePathname, useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { DateTimePicker } from './date-time-picker';
import { ChevronLeftIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

const signUpSchema = z.object({
    firstName: z.string()
        .min(2, "Name should have at least 2 characters")
        .max(50, "Name should not exceed 50 characters"),

    lastName: z.string()
        .min(2, "Name should have at least 2 characters")
        .max(50, "Name should not exceed 50 characters"),

    idCode: z.string()
        .min(10, "ID code should have at least 10 characters"),


    email: z.string()
        .min(1, "Email is required")
        .email("Email is not valid"),


    username: z.string()
        .min(1, "Username is required")
        .max(50, "Username should not exceed 50 characters")
        .refine((value) => /^[a-zA-Z0-9]+$/.test(value), "Username is not valid"),

    password: z.string()
        .min(1, "Password is required")
        .min(8, "Password should have at least 8 characters")
        .max(50, "Password should not exceed 50 characters"),

    confirmPassword: z.string()

});



export const SignUp = () => {
    const router = useRouter();
    const pathname = usePathname();
    const language = pathname.split('/')[1];

    const t = useTranslations();

    const form = useForm<z.infer<typeof signUpSchema>>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            idCode: "",
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
        }
    });

    const { isSubmitting, isValid } = form.formState;

    const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
        try {
            const response = await axios.post('/api/parents/register', values);
            router.push(`user/${response.data.id}/dashboard`);
        } catch (err) {
            console.log(err);
            toast.error("Something went wrong");
        }
    }

    return (
        <div className='flex flex-col min-h-screen justify-center items-center '>
            <Button className='absolute top-10 left-10 w-[50px] h-[50px]' onClick={() => router.back()}>
                <ChevronLeftIcon />
            </Button>
            <div className='max-w-5xl mx-auto h-full p-[5rem] shadow-md rounded-md dark:bg-background dark:border-slate-500 dark:border dark:border-1'>
                <h1 className='text-2xl font-bold'>
                    {/* Registration form */}
                    {t("signup-page.title")}
                </h1>
                <p className='text-sm text-slate-600'>
                    {/*Input your credentials to start work with application.*/}
                    {t("signup-page.description")}
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
                                            {/*First name*/}
                                            {t("signup-page.first-name")}
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={isSubmitting}
                                                placeholder={t('signup-page.placeholder-first-name')}
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
                                            {/*Last name*/}
                                            {t("signup-page.last-name")}
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={isSubmitting}
                                                placeholder={t('signup-page.placeholder-last-name')}
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
                                            {/*ID code*/}
                                            {t("signup-page.id-code")}
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={isSubmitting}
                                                placeholder='0123456789'
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
                                            {/*Email*/}
                                            {t("signup-page.email")}
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={isSubmitting}
                                                placeholder='example@kindersprout.com'
                                                {...field}
                                            />

                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            {/*Username*/}
                                            {t("signup-page.username")}
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={isSubmitting}
                                                placeholder={t('signup-page.placeholder-username')}
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
                                            {/*Password*/}
                                            {t("signup-page.password")}
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type='password'
                                                disabled={isSubmitting}
                                                placeholder={t('signup-page.placeholder-password')}
                                                {...field}
                                            />

                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="confirmPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            {/*Confirm Password*/}
                                            {t("signup-page.confirm-password")}
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type='password'
                                                disabled={isSubmitting}
                                                placeholder={t('signup-page.placeholder-confirm-password')}
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
                                {/*Continue*/}
                                {t("signup-page.submit")}
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
}