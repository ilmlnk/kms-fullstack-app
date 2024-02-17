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

const galleryItems = [
    <Image width={100} height={100} src="./logo.svg" key="1" alt="" />,
    <Image width={100} height={100} src="./next.svg" key="2" alt="" />,
    <Image width={100} height={100} src="./vercel.svg" key="3" alt="" />
];

type CardProps = React.ComponentProps<typeof Card>

const LandingContent = () => {
    return (
        <div className="landing-content">
            <div className="container h-[600px]">
                <div className="mt-72">
                    <h1 className="font-semibold text-6xl">
                        KinderSprout
                    </h1>
                    <p className="mt-4 text-2xl">Empowering Tomorrow&apos;s Leaders, One Nursery at a Time!</p>
                    <Button className={cn("mt-8")}>
                        Get Started
                    </Button>
                </div>
            </div>

            <div className="container mb-8 ">
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
                <div className="grid grid-rows-2 grid-flow-col gap-4 text-justify">
                    <div className="row-span-3">
                        <h2 className="mb-2 text-primary font-semibold text-3xl">Supporting Every Step</h2>
                        <div className="mb-3 w-[500px]">
                            <p>With PowerSchool, support the learning journey with a breadth of cloud-based educational and operational software tools that impact every student’s experience.</p>
                            <p>We are with students from day one, offering tools to help them stay on track while learning the basics and discovering what life looks like after K-12.​</p>
                        </div>
                    </div>
                    <div className="row-span-3">
                        <div>
                            <Image
                                className="ml-8"
                                height={120}
                                width={120}
                                alt="logo"
                                src="/logo.svg"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/*  */}
            <div className="container mb-12">
                <div className="grid grid-rows-2 grid-flow-col gap-4 mt-12">
                    <div className="row-span-3">
                        <div>
                            <Image
                                className="ml-8"
                                height={120}
                                width={120}
                                alt="logo"
                                src="/logo.svg"
                            />
                        </div>
                    </div>

                    <div className="row-span-3 text-right">
                        <h2 className="mb-2 text-primary font-semibold text-3xl">Supporting Every Step</h2>
                        <div className="mb-3 w-[500px] ml-auto text-justify">
                            <p className="">With PowerSchool, support the learning journey with a breadth of cloud-based educational and operational software tools that impact every student’s experience.</p>
                            <p className="">We are with students from day one, offering tools to help them stay on track while learning the basics and discovering what life looks like after K-12.​</p>
                        </div>
                    </div>

                </div>
            </div>
            <Testimonial />
            <div className="container justify-center h-[500px]">
                <div className="pt-16">
                    <h1 className="text-5xl font-semibold text-center">Our Kids</h1>
                    <div className="">
                        <AliceCarousel mouseTracking items={galleryItems} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingContent;