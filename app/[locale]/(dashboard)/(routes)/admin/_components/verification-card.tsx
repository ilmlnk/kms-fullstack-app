'use client'

import { Button } from "@/components/ui/button";
import { CheckIcon, XIcon } from "lucide-react";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

export const VerificationCard = () => {
    return (
        <div className="rounded-lg border bg-card text-card-foreground mt-4">
            <div className="grid grid-cols-2 place-content-between p-8">
                <div className="flex">
                    <Avatar className="w-[50px] h-[50px]">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                        <h1 className="font-bold text-lg">Example User</h1>
                        <p className="text-slate-500">Joined 1 hr ago</p>
                    </div>
                </div>
                <div className="flex place-content-end gap-4">
                    <Button className="rounded-full w-[50px] h-[50px] hover:text-white hover:bg-green-600 transition duration-200" variant="outline">
                        <CheckIcon />
                    </Button>
                    <Button className="rounded-full w-[50px] h-[50px] hover:text-white hover:bg-red-600 transition duration-200" variant="outline">
                        <XIcon />
                    </Button>
                    <Button className="rounded-full w-[50px] h-[50px]" variant="outline">
                        ...
                    </Button>
                </div>
            </div>
        </div>
    );
}

