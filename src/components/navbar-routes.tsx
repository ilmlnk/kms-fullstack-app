"use client"

import { usePathname } from "next/navigation";
import { UserButton } from "./user-button";
import { useRouter } from "next/navigation";

export const NavbarRoutes = () => {
    const pathname = usePathname();
    const router = useRouter();

    const isTeacherPage = pathname?.startsWith('/teacher');
    const isParentPage = pathname?.startsWith('/chapter');

    return (
        <div className="flex gap-x-2 ml-auto">
            <UserButton/>
        </div>
    );
} 