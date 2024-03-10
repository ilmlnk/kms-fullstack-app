"use client"

import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
} from "@/components/ui/context-menu"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SmilePlusIcon } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const ChildrenPage = () => {
    const pathname = usePathname();
    const userId = pathname.split("/")[2];
    return (
        <div className='p-8'>
            <div>
                <h1 className="text-3xl font-bold">Children</h1>
                <div className="flex gap-4">
                    <Link href="/user/[userId]/children/add" as={`/user/${userId}/children/add`}>
                        <Card className="mt-4 w-[250px] h-[300px] 
                    border-dashed grid justify-center gap-4 place-content-center
                    hover:border-slate-400 hover:border-solid transition duration-200 cursor-pointer">

                            <div>
                                <SmilePlusIcon size={40} className="grid m-6 text-slate-500" />
                                <h1 className="text-slate-500 text-xl font-semibold">Add Child</h1>
                            </div>
                        </Card>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default ChildrenPage;