"use client"

export default function LoginAccount() {
    return (
        <div>
            
        </div>
    )
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