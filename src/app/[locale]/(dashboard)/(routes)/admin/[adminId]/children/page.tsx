'use client'

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserRoundPlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const children = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        group: 'Group 1',
    }
];

export default function ChildrenPage() {
    const router = useRouter();
    return (
        <div className="p-12">
            <h1 className="text-3xl font-bold">Children</h1>
            <div className="flex gap-4 mt-8">
                {children.map((child) => (
                    <div key={child.id} className="w-[300px] rounded-lg border bg-card text-card-foreground shadow-sm p-8">
                        <Image alt="ceo" className="rounded-md" src={'/ceo.jpg'} width={300} height={300} />
                        <div className="flex place-content-between mt-4">
                            <h1 className="text-2xl font-bold">{child.firstName} {child.lastName}</h1>
                            <Button variant="outline">...</Button>
                        </div>
                        <div>
                            <p className="text-slate-500">Group: {child.group}</p>
                        </div>
                    </div>
                ))}
                <div className="w-[300px] rounded-lg 
                hover:scale-102 hover:bg-slate-900 
                transition duration-150 cursor-pointer 
                border-4 border-dashed bg-card text-card-foreground
                text-center shadow-sm p-8 flex flex-col justify-center
                " onClick={() => router.push('verification')}>
                    <div className="flex items-center justify-center mb-4">
                        <UserRoundPlusIcon size={64} className="text-slate-500" />
                    </div>
                    <h1 className="text-slate-500 text-xl">Add Child</h1>
                </div>
            </div>
        </div>
    )
}

