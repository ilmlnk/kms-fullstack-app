'use client'

import Image from "next/image"
import { Button } from "./ui/button"
import { usePathname, useRouter } from "next/navigation"

export const RequireLoginPage = () => {
    const router = useRouter();
    const pathname = usePathname();
    const language = pathname?.split("/")[1];
    return (
        <div className="h-screen w-screen bg-gray-50 flex items-center">
            <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
                <div className="w-full lg:w-1/2 mx-8">
                    <div className="text-7xl text-green-500 font-dark font-extrabold mb-8">You are not authorized.</div>
                    <p className="text-2xl md:text-3xl font-light leading-normal mb-8">
                        You should be logged in to access this page.
                    </p>

                    <Button onClick={() => router.push(`/${language}/login`)} className="text-xl w-[200px] h-[50px]">Login</Button>
                </div>
                <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
                    <Image src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg" width={500} height={500} className="" alt="Page not found"/>
                </div>

            </div>
        </div>
    )
}