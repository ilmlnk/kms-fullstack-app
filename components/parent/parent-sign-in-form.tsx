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
        const signInResult = await signIn("credentials", {
            username: values.username,
            password: values.password,
            callbackUrl: `${window.location.origin}`,
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



/*import { FormEvent } from "react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LinkedInLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons"
import { ChevronLeft } from "lucide-react"
import { useCallback } from "react";
import { useRouter } from "next/navigation"
import Link from "next/link"
import axios from "axios";
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { useRef } from "react"
import * as z from 'zod';
import { Form } from "./ui/form"

export default function LoginAccount() {
    const router = useRouter();

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formSchema = z.object({
            usernameOrEmail: z.string().min(1, {
                message: "Username or email is required",
            }),
            password: z.string().min(1, {
                message: "Password is required",
            })
        });

    }
    const [rememberMe, setRememberMe] = useState(false);

    // back button
    const onClick = useCallback(() => {
        router.back();
    }, [router]);

    const handleCheckboxChange = () => {
        setRememberMe(!rememberMe);
    };


    return (
        <div className="flex flex-col justify-center items-center min-h-screen overflow-hidden">
            <Button className="absolute top-10 left-10" onClick={onClick}>
                <ChevronLeft className={cn(
                    "h-6 w-4"
                )} />
            </Button>
            <div className="w-full m-auto lg:max-w-lg">
                <Card>
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl text-center">Sign in</CardTitle>
                        <CardDescription className="text-center">
                            Enter your credentials to login
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email or Username</Label>
                            <Input id="email" type="usernameEmail" placeholder="Input email or username" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" />
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms" onChange={handleCheckboxChange} />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Remember me
                            </label>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col">
                        <Button onSubmit={handleSubmit} className="w-full">Login</Button>
                    </CardFooter>
                    <div className="relative mb-2">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">
                                Or continue with
                            </span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6 m-2">
                        <Button variant="outline">
                            <LinkedInLogoIcon className="mr-2 h-4 w-4" />
                            LinkedIn
                        </Button>
                        <Button variant="outline">
                            <InstagramLogoIcon className="mr-2 h-4 w-4" />
                            Instagram
                        </Button>
                    </div>

                    <p className="mt-2 text-xs text-center text-gray-700 mb-2">
                        {" "}
                        Don&apos;t have an account?{" "}
                        <Link href="/sign-up"
                            className="text-blue-600 hover:underline">Sign up</Link>
                    </p>
                </Card>
            </div>
        </div>
    )
}*/