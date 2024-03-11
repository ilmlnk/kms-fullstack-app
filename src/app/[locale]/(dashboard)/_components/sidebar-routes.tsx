"use client"

import { Layout, Compass, List, BarChart, FileArchiveIcon, LayoutDashboardIcon } from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const guestRoutes = [
    {
        icon: Layout,
        label: "Dashboard",
        href: "/user/dashboard",
    },
    {
        icon: Compass,
        label: "Browse",
        href: "/user/search",
    },
    {
        icon: FileArchiveIcon,
        label: "Private Files",
        href: "/user/private-files",
    },
];

const guestCourses = [
    {
        icon: FileArchiveIcon,
        label: "Private Files",
        href: "/private-files",
    },
    {
        icon: FileArchiveIcon,
        label: "Private Files",
        href: "/private-files",
    },
    {
        icon: FileArchiveIcon,
        label: "Private Files",
        href: "/private-files",
    },
    {
        icon: FileArchiveIcon,
        label: "Private Files",
        href: "/private-files",
    },
    {
        icon: FileArchiveIcon,
        label: "Private Files",
        href: "/private-files",
    },
    {
        icon: FileArchiveIcon,
        label: "Private Files",
        href: "/private-files",
    },
    {
        icon: FileArchiveIcon,
        label: "Private Files",
        href: "/private-files",
    },
    {
        icon: FileArchiveIcon,
        label: "Private Files",
        href: "/private-files",
    },
    {
        icon: FileArchiveIcon,
        label: "Private Files",
        href: "/private-files",
    },
    {
        icon: FileArchiveIcon,
        label: "Private Files",
        href: "/private-files",
    },
    {
        icon: FileArchiveIcon,
        label: "Private Files",
        href: "/private-files",
    },
    {
        icon: FileArchiveIcon,
        label: "Private Files",
        href: "/private-files",
    },
    {
        icon: FileArchiveIcon,
        label: "Private Files",
        href: "/private-files",
    },
    {
        icon: FileArchiveIcon,
        label: "Private Files",
        href: "/private-files",
    },
];

const teacherRoutes = [
    {
        icon: LayoutDashboardIcon,
        label: "Dashboard",
        href: "/teacher/dashboard",
    },
    {
        icon: List,
        label: "Subjects",
        href: "/teacher/subjects",
    },
    {
        icon: BarChart,
        label: "Analytics",
        href: "/teacher/analytics",
    },
];

const groupsRoutes = [
    {
        icon: LayoutDashboardIcon,
        label: "Dashboard",
        href: "/teacher/dashboard",
    },
    {
        icon: LayoutDashboardIcon,
        label: "Dashboard",
        href: "/teacher/dashboard",
    },
    {
        icon: LayoutDashboardIcon,
        label: "Dashboard",
        href: "/teacher/dashboard",
    },
    {
        icon: LayoutDashboardIcon,
        label: "Dashboard",
        href: "/teacher/dashboard",
    },
];

export const SidebarRoutes = () => {
    const pathname = usePathname();
    const userId = pathname.split('/')[2];

    const isTeacherPage = pathname?.includes('/teacher');
    const isGuestPage = pathname?.includes('/user');

    const routes = isTeacherPage ? teacherRoutes : guestRoutes;

    return (
        <div className="flex flex-col w-full">
            {routes.map((route) => (
                <SidebarItem
                    key={route.href}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                />
            ))}

            {
                isTeacherPage && (
                    <>
                        <Separator />
                        {
                            groupsRoutes.length > 0 && (
                                groupsRoutes.map((route) => (
                                    <SidebarItem
                                        key={route.href}
                                        icon={route.icon}
                                        label={route.label}
                                        href={route.href}
                                    />
                                ))
                            )
                        }
                    </>
                )

            }

            {
                isGuestPage && (
                    <>
                        <Separator />
                        {guestCourses.map((route) => (
                            <SidebarItem
                                key={route.href}
                                icon={route.icon}
                                label={route.label}
                                href={route.href}
                            />
                        ))}
                    </>
                )
            }

        </div>
    )
}