"use client"

import { Layout, Compass, List, BarChart, FileArchiveIcon, LayoutDashboardIcon, UsersRoundIcon, UserCheckIcon, FileCheck2Icon, HandCoinsIcon, CalendarDaysIcon, MessageCircleMoreIcon, SchoolIcon, BookOpenCheckIcon, BabyIcon } from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";


/* PARENT SECTION */
const parentRoutes = [
    {
        icon: Layout,
        label: "Dashboard",
        href: "dashboard",
    },
    {
        icon: Compass,
        label: "Browse",
        href: "search",

    },
    {
        icon: BookOpenCheckIcon,
        label: "Gradebook",
        href: "gradebook",
    },
    {
        icon: BabyIcon,
        label: "Children",
        href: "chidlren",
    },
    {
        icon: SchoolIcon,
        label: "Teachers",
        href: "teachers",
    },
    {
        icon: HandCoinsIcon,
        label: "Payments",
        href: "payments",
    },
    {
        icon: CalendarDaysIcon,
        label: "Schedule",
        href: "schedule",
    },
    {
        icon: FileArchiveIcon,
        label: "Private Files",
        href: "private-files",
    },
];

const parentSubjects = [
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

/* TEACHER SECTION */

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
        icon: UsersRoundIcon,
        label: "Groups",
        href: "/teacher/analytics",
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

/* ADMIN SECTION */
const adminRoutes = [
    {
        icon: LayoutDashboardIcon,
        label: "Dashboard",
        href: "dashboard",
    },
    {
        icon: FileCheck2Icon,
        label: "Documents",
        href: "documents",
    },
    {
        icon: UsersRoundIcon,
        label: "Group Management",
        href: "group-management",
    },
    {
        icon: UserCheckIcon,
        label: "Verification",
        href: "verification",
    },
    {
        icon: CalendarDaysIcon,
        label: "Manage Schedule",
        href: "manage-schedule",
    },
    {
        icon: HandCoinsIcon,
        label: "Payments",
        href: "payments",
    },
    {
        icon: MessageCircleMoreIcon,
        label: "Messages",
        href: "messages",
    }
];

export const SidebarRoutes = () => {
    const pathname = usePathname();
    const userId = pathname.split('/')[2];

    const isTeacherPage = pathname?.includes('/teacher/');
    const isParentPage = pathname?.includes('/user/');
    const isAdminPage = pathname?.includes('/admin/');

    const routes = isTeacherPage ? teacherRoutes : isParentPage ? parentRoutes : isAdminPage ? adminRoutes : [];

    return (
        <div className="flex flex-col w-full">
            <h1 className="m-4 dark:text-slate-500 text-sm uppercase">Pages</h1>
            {routes.map((route: any) => (
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
                isParentPage && (
                    <>
                        <Separator />
                        <h1 className="m-4 dark:text-slate-500 text-sm uppercase">Subjects</h1>
                        {parentSubjects.map((route) => (
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