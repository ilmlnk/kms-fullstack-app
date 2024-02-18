"use client"

import { Typography } from "@mui/material";
import { Button } from "./ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Switch } from "./ui/switch";
import { BellIcon, CheckIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Testimonial from "./testimonial";
import AliceCarousel from 'react-alice-carousel';
import Link from 'next/link';
import { Avatar } from "./ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const notifications = [
    {
        title: "Your call has been confirmed.",
        description: "1 hour ago",
    },
    {
        title: "You have a new message!",
        description: "1 hour ago",
    },
    {
        title: "Your subscription is expiring soon!",
        description: "2 hours ago",
    },
]

const teamUsers = [
    { id: 1, firstName: "Laura", lastName: "Homes", src: "https://github.com/shadcn.png", description: "Chief Executing Officer" },
    { id: 2, firstName: "Laura", lastName: "Homes", src: "https://github.com/shadcn.png", description: "Chief Technical Officer" },
    { id: 3, firstName: "Laura", lastName: "Homes", src: "https://github.com/shadcn.png", description: "President" },
    { id: 4, firstName: "Laura", lastName: "Homes", src: "https://github.com/shadcn.png", description: "It's an amazing app!" },
    { id: 5, firstName: "Laura", lastName: "Homes", src: "https://github.com/shadcn.png", description: "It's an amazing app!" },
    { id: 6, firstName: "Laura", lastName: "Homes", src: "https://github.com/shadcn.png", description: "It's an amazing app!" },
    { id: 7, firstName: "Laura", lastName: "Homes", src: "https://github.com/shadcn.png", description: "It's an amazing app!" },
    { id: 8, firstName: "Laura", lastName: "Homes", src: "https://github.com/shadcn.png", description: "It's an amazing app!" },
    { id: 9, firstName: "Laura", lastName: "Homes", src: "https://github.com/shadcn.png", description: "It's an amazing app!" },
    { id: 10, firstName: "Laura", lastName: "Homes", src: "https://github.com/shadcn.png", description: "It's an amazing app!" },
];

type CardProps = React.ComponentProps<typeof Card>

const LandingContent = () => {

    const updatedTeamUsers = teamUsers.map(user => {
        const fallback = `${user.firstName[0]}${user.lastName[0] || user.firstName[0]}`;
        return { ...user, fallback };
    })

    return (
        <div className="landing-content">
            <div className="container mt-28 mb-48">
                <div className="mt-32 mb-16 row-span-2 grid grid-rows-2 grid-flow-col gap-12">
                    <div className="mt-48 w-[500px] row-span-3">
                        <h1 className="font-semibold text-6xl">
                            KinderSprout
                        </h1>
                        <p className="mt-4 text-2xl">Empowering Tomorrow&apos;s Leaders, One Nursery at a Time!</p>
                        <Button className={cn("mt-8")}>
                            <Link href='/child-register'>
                                Get Started
                            </Link>
                        </Button>
                    </div>
                    <div className="row-span-2">
                        <Image
                            className="rounded-md shadow-xl object-cover h-[600px] w-[800px]"
                            width={1000}
                            height={300}
                            src="/kids.jpg"
                            alt="Kids"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-[#f4ede4] p-16">
                <h1 className="text-center mb-8 text-5xl font-semibold">Our Advantages</h1>
                <div className="container mb-8">
                    <div className="bg-blue-300 p-8 grid grid-rows-3 grid-flow-col gap-4 rounded ">
                        <div className="row-span-3">
                            <h1 className="text-3xl font-semibold">Personalized Education</h1>
                        </div>
                        <div className="row-span-3">
                            <p className="text-xl">For students to succeed, they need to feel connected to learning in a personal way.</p>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="container">
                    <div className="grid grid-rows-2 grid-flow-col gap-4 text-justify justify-between">
                        <div className="row-span-1 pt-8">
                            <h2 className="mb-2 text-primary font-semibold text-3xl">Supporting Every Step</h2>
                            <div className="mb-3 w-[500px] font-medium mt-4">
                                <p>Automate away routine tasks with the power of generative AI and simplify your workflow with all your favorite apps ready to go in KinderSprout.</p>
                            </div>
                            <Link className=" hover:text-blue-500 transition duration-150" href="/about-us">
                                <Button className="mt-4">
                                    Learn more
                                </Button>
                            </Link>
                        </div>
                        <div className="row-span-3">
                            <div>
                                <Image
                                    className="shadow-sm border-6 rounded-md"
                                    height={300}
                                    width={600}
                                    alt="logo"
                                    src="/kids.jpg"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/*  */}
                <div className="container">
                    <div className="grid grid-rows-2 grid-flow-col gap-4 mt-16 justify-between">
                        <div className="row-span-3">
                            <div>
                                <Image
                                    className="rounded-md"
                                    height={300}
                                    width={600}
                                    alt="logo"
                                    src="/kids.jpg"
                                />
                            </div>
                        </div>

                        <div className="row-span-3 text-right font-medium justify-between">
                            <h2 className="text-primary font-semibold text-3xl">Supporting Every Step</h2>
                            <div className="mt-6 w-[500px] ml-auto text-justify">
                                <p className="">With PowerSchool, support the learning journey with a breadth of cloud-based educational and operational software tools that impact every student’s experience.</p>
                                <p className="">We are with students from day one, offering tools to help them stay on track while learning the basics and discovering what life looks like after K-12.​</p>
                                <Link className="mt-4 float-right content-right underline-animation hover:text-blue-500 transition duration-150" href="/about-us">
                                    <Button>
                                        Learn more
                                    </Button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container justify-center">
                <div className="pt-16 pb-16">
                    <h1 className="text-5xl mb-8 font-semibold text-center">Our Team</h1>
                    <div className="grid grid-cols-4 gap-6 bg-slate-300 justify-between rounded-md p-10">
                        {updatedTeamUsers.map((user) => (
                            <div className=" bg-slate-100 rounded-md grid grid-rows-2 justify-center pt-12" key={user.id}>
                                <Avatar className="flex w-[150px] h-[150px] shadow-sm mx-auto" key={user.id}>
                                    <AvatarImage src={user.src} />
                                    <AvatarFallback>{user.fallback}</AvatarFallback>
                                </Avatar>
                                <div className="text-center">
                                    <h6 className="mt-4 font-semibold text-xl">{user.firstName} {user.lastName}</h6>
                                    <p className="">{user.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Testimonial />
        </div>
    )
}

export default LandingContent;