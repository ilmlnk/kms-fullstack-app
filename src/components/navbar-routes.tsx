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
            <UserButton />
        </div>
    );
} 