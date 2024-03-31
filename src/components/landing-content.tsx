"use client"

import { Card } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import Hero from "./landing/hero";
import Companies from "./landing/companies";
import { FeaturesBlock } from "./landing/features";
import { PostsBlock } from "./landing/posts";
import CTA from "./landing/cta";


const teamUsers = [
    { id: 1, firstName: "Alexander", lastName: "Nevzorov", src: "/ceo.jpg", description: "Chief Executing Officer" },
    { id: 2, firstName: "Jerry", lastName: "King", src: "/cto.jpg", description: "Chief Technical Officer" },
    { id: 3, firstName: "Mary", lastName: "Lord", src: "/president.jpg", description: "President" },
    { id: 4, firstName: "Laura", lastName: "Homes", src: "/corporate_officer.jpg", description: "Corporate Officer" },
    { id: 5, firstName: "Paul", lastName: "Andersen", src: "/vice_president.jpg", description: "Vice President of New Business Development" },
    { id: 6, firstName: "Jacob", lastName: "Moore", src: "/vp_programming.jpg", description: "Vice President of Programming" },
    { id: 7, firstName: "Michelle", lastName: "Pryzbylski", src: "https://github.com/shadcn.png", description: "Vice President of Professional Services" },
    { id: 8, firstName: "Mike", lastName: "Bianco", src: "https://github.com/shadcn.png", description: "Vice President of Data & Information Security" },
];

type CardProps = React.ComponentProps<typeof Card>

const LandingContent = () => {
    const t = useTranslations();
    const router = useRouter();
    const pathname = usePathname();
    const language = pathname?.split("/")[1];

    return (
        <>
        <Hero/>
        <Companies/>
        <FeaturesBlock/>
        <CTA/>
        <PostsBlock/>
        </>
    )
}

export default LandingContent;