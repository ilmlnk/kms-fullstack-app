"use client"

import { usePathname } from "next/navigation";
import { UserButton } from "./user-button";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./theme-toggle";
import { useTheme } from "next-themes";
import { NotificationMenu } from "./notification-menu";
import { cn } from "@/lib/utils";


export const NavbarRoutes = () => {
    const pathname = usePathname();
    const router = useRouter();
    const { setTheme } = useTheme();

    const isTeacherPage = pathname?.startsWith('/teacher/dashboard');
    const isParentPage = pathname?.startsWith('/chapter');


    return (
        <div className={`flex gap-x-2 ml-auto `}>
            <NotificationMenu />
            <ModeToggle />
            {isTeacherPage || isParentPage ? (
                <Link href="/user/dashboard">
                    <Button variant="ghost">
                        <LogOut className="h-4 w-4 mr-2" />
                        Exit
                    </Button>
                </Link>
            ) : (
                <Link href="/teacher/dashboard/courses">
                    <Button variant="ghost" className="mr-4">
                        Teacher Mode
                    </Button>
                </Link>
            )}
            <UserButton />
        </div>
    );
} 