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
import { Separator } from "@/components/ui/separator"
import zxcvbn from 'zxcvbn';
import axios from "axios"



function ChangeDataForm() {
    // form fields
    const [firstName, setFirstName] = useState<string>();
    const [lastName, setLastName] = useState<string>();
    const [email, setEmail] = useState<string>('');
    const [username, setUsername] = useState<string>();
    const [role, setRole] = useState("Teacher");
    const [date, setDate] = useState<Date>();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState<string>();

    const passwordStrength = zxcvbn(password);
    // email validation
    const [isExistingEmail, setIsExistingEmail] = useState(false);

    // username validation
    const [isExistingUsername, setIsExistingUsername] = useState(false);
    const [letterUsernameValidated, setLetterUsernameValidated] = useState(false);
    const [specialCharacterUsernameValidated, setSpecialCharacterUsernameValidated] = useState(false);
    const [usernameStartsWithLetter, setUsernameStartsWithLetter] = useState(false);
    const [usernameEndsWithLetter, setUsernameEndsWithLetter] = useState(false);

    // password validation states
    const [lowerValidated, setLowerValidated] = useState(false);
    const [upperValidated, setUpperValidated] = useState(false);
    const [numberValidated, setNumberValidated] = useState(false);
    const [specialCharacterValidated, setSpecialCharacterValidated] = useState(false);
    const [lengthValidated, setLengthValidated] = useState(false);

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

    const submitRegistration = async () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = emailRegex.test(email);

        const validatedPassword = lowerValidated &&
            upperValidated &&
            numberValidated &&
            specialCharacterValidated &&
            lengthValidated;

        const validatedUsername = isExistingUsername &&
            letterUsernameValidated &&
            specialCharacterUsernameValidated &&
            usernameStartsWithLetter &&
            usernameEndsWithLetter;

        const handleCheckUsername = async () => {
            try {
                const response = await axios.get('/api/getUsername', {
                    params: { username },
                });
                setIsExistingUsername(response.data.exists);
            } catch (err) {
                console.error('Error checking username: ', err);
            }
        }

        const handleCheckEmail = async () => {
            try {
                const response = await axios.get('/api/getEmail', {
                    params: { email },
                });
                setIsExistingEmail(response.data.exists);
            } catch (err) {
                console.error('Error checking email: ', err);
            }
        }

        await handleCheckUsername();
        await handleCheckEmail();

        if (validatedPassword && validatedUsername && isValidEmail) {
            try {
                const response = await axios.post('/api/registerUser', {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    username: username,
                    role: role,
                    date: date,
                    password: password,
                });
                console.log('User registered successfully: ', response.data)

            } catch (err) {
                console.error('');
            }
        }
    }

    const onClick = useCallback(() => {
        router.back();
    }, [router]);
    return (
        <div className="flex flex-col justify-center items-center min-h-screen overflow-hidden">
                <Button className="absolute top-20 left-10" onClick={onClick}>
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
                                                    <p className="text-slate-400 font-regular">{role}</p>

                                                </div>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="w-56">
                                            <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuRadioGroup value={role} onValueChange={setRole}>
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
                                <Button variant="outline" className="w-full" onClick={submitRegistration}>Sign Up</Button>
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
                </div >
        </div >
    )
}

export default ChangeDataForm;