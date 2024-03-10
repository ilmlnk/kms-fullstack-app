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

    const isTeacherPage = pathname?.includes('/teacher');


    return (
        <div className={`flex ml-auto `}>
                <NotificationMenu />
                <ModeToggle />
            {isTeacherPage ? (
                <Link href="/user/dashboard">
                    <Button className="ml-2 mr-2" variant="ghost">
                        <LogOut className="h-4 w-4 mr-2" />
                        Exit
                    </Button>
                </Link>
            ) : (
                <Link href="/">
                    <Button variant="ghost" className="ml-2 mr-2">
                        Teacher Mode
                    </Button>
                </Link>
            )}
            <UserButton />
        </div>
    );
} 