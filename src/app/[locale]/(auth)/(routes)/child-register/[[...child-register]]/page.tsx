"use client"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LinkedInLogoIcon, InstagramLogoIcon, CrossCircledIcon, CheckCircledIcon } from "@radix-ui/react-icons"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, ChevronDown, Divide } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback } from "react"
import { Separator } from "@/components/ui/separator";
import zxcvbn from 'zxcvbn';


export default function ChildRegisterPage() {
    const [password, setPassword] = useState('');
    const passwordStrength = zxcvbn(password);
    // email validation
    const [isExistingEmail, setIsExistingEmail] = useState(false);

    // username validation
    const [isExistingUsername, setIsExistingUsername] = useState(false);

    // password validation states
    const [lowerValidated, setLowerValidated] = useState(false);
    const [upperValidated, setUpperValidated] = useState(false);
    const [numberValidated, setNumberValidated] = useState(false);
    const [specialCharacterValidated, setSpecialCharacterValidated] = useState(false);
    const [lengthValidated, setLengthValidated] = useState(false);

    const [date, setDate] = useState<Date>();
    const [position, setPosition] = useState("Teacher");
    const [confirmPassword, setConfirmPassword] = useState('');
    const router = useRouter();

    const handlePasswordChange = (value: string) => {
        // regex
        const lower = new RegExp('(?=.*[a-z])');
        const upper = new RegExp('(?=.*[A-Z])');
        const number = new RegExp('(?=.*[0-9])');
        const specialCharacter = new RegExp('(?=.*[!@#\$%\^&\*])');
        const length = new RegExp('(?=.{8,})')

        // lower validation
        if (lower.test(value)) {
            setLowerValidated(true);
        } else {
            setLowerValidated(false);
        }

        // upper validation
        if (upper.test(value)) {
            setUpperValidated(true);
        } else {
            setUpperValidated(false);
        }

        // number validation
        if (number.test(value)) {
            setNumberValidated(true);
        } else {
            setNumberValidated(false);
        }

        // special character validation
        if (specialCharacter.test(value)) {
            setSpecialCharacterValidated(true);
        } else {
            setSpecialCharacterValidated(false);
        }

        // length validation
        if (length.test(value)) {
            setLengthValidated(true);
        } else {
            setLengthValidated(false);
        }
    };

    const onClick = useCallback(() => {
        router.back();
    }, [router]);
    return (
        <div className="flex flex-col justify-center items-center min-h-screen overflow-hidden">
            <Button className="absolute top-10 left-10" onClick={onClick}>
                <ChevronLeft className={cn(
                    "h-6 w-4"
                )} />
            </Button>
            <div className="flex gap-4">
                <div className="w-full m-auto lg:max-w-lg">
                    <Card className="">
                        <CardHeader className="space-y-1">
                            <CardTitle className="text-2xl text-center">
                                Create an account
                            </CardTitle>
                            <CardDescription className="text-center">
                                Fill data to sign up
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid grid-rows-4 grid-flow-col gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="name">First Name</Label>
                                <Input id="name" type="text" placeholder="Enter first name" required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="Enter email" required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="role">Role</Label>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline">
                                            <div className="flex items-center">
                                                <p className="text-slate-400 font-regular">{position}</p>

                                            </div>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-56">
                                        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                                            <DropdownMenuRadioItem value="Teacher">Teacher</DropdownMenuRadioItem>
                                            <DropdownMenuRadioItem value="Administrator">Administrator</DropdownMenuRadioItem>
                                            <DropdownMenuRadioItem value="Parent">Parent</DropdownMenuRadioItem>
                                        </DropdownMenuRadioGroup>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Birth Date</Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button variant="outline"
                                            className={cn(
                                                'w-[220px] justify-start text-left font-normal',
                                                !date && 'text-muted-foreground',
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            <span>{date ? format(date, "PPP") : "Pick a date"}</span>
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar v-model="date" />
                                    </PopoverContent>
                                </Popover>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Last Name</Label>
                                <Input id="lastName" type="text" placeholder="Enter last name" required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Username</Label>
                                <Input id="username" type="username" placeholder="Enter username" required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="password">Confirm Password</Label>
                                <Input id="password" type="password" placeholder="Confirm password" required />
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-col">
                            <Button variant="outline" className="w-full">Sign Up</Button>
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
                            Already have an account?{" "}
                            <span className=" text-blue-600 hover:underline">Sign In</span>
                        </p>
                    </Card>
                </div>
                <Card className="w-[500px]">
                    <CardHeader>
                        <CardTitle className="text-2xl text-center">
                            Verification Process
                        </CardTitle>
                        <CardDescription className="text-center">
                            Our tips will help you to sign up correctly :)
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <div className={cn("pt-4 pb-4")}>
                            <h3 className={cn(
                                "font-semibold text-xl",
                            )}>Username checks</h3>
                            <div className="flex items-center">
                                {lowerValidated ? (
                                    <span className={cn("mr-4 text-green-600")}>
                                        <CheckCircledIcon />
                                    </span>
                                ) : (
                                    <span className={cn("mr-4 text-red-600")}>
                                        <CrossCircledIcon className="" />
                                    </span>
                                )}
                                <p>Username should contain letters, numbers, periods
                                </p>
                            </div>
                            <div className="flex items-center">
                                {lowerValidated ? (
                                    <span className={cn("mr-4 text-green-600")}>
                                        <CheckCircledIcon />
                                    </span>
                                ) : (
                                    <span className={cn("mr-4 text-red-600")}>
                                        <CrossCircledIcon className="" />
                                    </span>
                                )}
                                <p>
                                    Don&apos;t contain special characters
                                </p>
                            </div>
                            <div className="flex items-center">
                                {lowerValidated ? (
                                    <span className={cn("mr-4 text-green-600")}>
                                        <CheckCircledIcon />
                                    </span>
                                ) : (
                                    <span className={cn("mr-4 text-red-600")}>
                                        <CrossCircledIcon className="" />
                                    </span>
                                )}
                                <p>Username should begin with letter</p>
                            </div>
                            <div className="flex items-center">
                                {lowerValidated ? (
                                    <span className={cn("mr-4 text-green-600")}>
                                        <CheckCircledIcon />
                                    </span>
                                ) : (
                                    <span className={cn("mr-4 text-red-600")}>
                                        <CrossCircledIcon className="" />
                                    </span>
                                )}
                                <p>
                                    Username should end with letter
                                </p>
                            </div>
                        </div>
                        <Separator className="mt-2 mb-2" />
                        <div className="pt-4 pb-4">
                            <h3 className="font-semibold text-xl">Password checks</h3>
                            <div className="flex items-center">
                                {/* lowercase letter validation */}
                                {lowerValidated ? (
                                    <span className={cn("mr-4 text-green-600")}>
                                        <CheckCircledIcon />
                                    </span>
                                ) : (
                                    <span className={cn("mr-4 text-red-600")}>
                                        <CrossCircledIcon className="" />
                                    </span>
                                )}
                                <p>At least one lowercase letter</p>
                            </div>
                            {/* uppercase letter validation */}
                            <div className="flex items-center">
                                {lowerValidated ? (
                                    <span className={cn("mr-4 text-green-600")}>
                                        <CheckCircledIcon />
                                    </span>
                                ) : (
                                    <span className={cn("mr-4 text-red-600")}>
                                        <CrossCircledIcon className="" />
                                    </span>
                                )}
                                <p>At least one uppercase letter</p>
                            </div>
                            {/* number validation */}
                            <div className="flex items-center">
                                {lowerValidated ? (
                                    <span className={cn("mr-4 text-green-600")}>
                                        <CheckCircledIcon />
                                    </span>
                                ) : (
                                    <span className={cn("mr-4 text-red-600")}>
                                        <CrossCircledIcon className="" />
                                    </span>
                                )}
                                <p>At least one number</p>
                            </div>
                            {/* special character validation */}
                            <div className="flex items-center">
                                {lowerValidated ? (
                                    <span className={cn("mr-4 text-green-600")}>
                                        <CheckCircledIcon />
                                    </span>
                                ) : (
                                    <span className={cn("mr-4 text-red-600")}>
                                        <CrossCircledIcon className="" />
                                    </span>
                                )}
                                <p>At least one special character</p>
                            </div>
                            {/* password strength */}
                            <div className="mt-4">
                                <h6>Password Strength</h6>
                                <p>{passwordStrength.feedback.suggestions.join(' ')}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div >
        </div >
    )
}