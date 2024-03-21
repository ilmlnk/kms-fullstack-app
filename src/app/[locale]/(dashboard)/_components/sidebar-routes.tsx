"use client"

import { Layout, Compass, List, BarChart, FileArchiveIcon, LayoutDashboardIcon, UsersRoundIcon, UserCheckIcon, FileCheck2Icon, CoinsIcon, CalendarDaysIcon } from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";


/* PARENT SECTION */
const parentRoutes = [
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
        icon: CoinsIcon,
        label: "Payments",
        href: "payments",
    },
];

export const SidebarRoutes = () => {
    const pathname = usePathname();
    const userId = pathname.split('/')[2];

    const isTeacherPage = pathname?.includes('/teacher');
    const isParentPage = pathname?.includes('/user');
    const isAdminPage = pathname?.includes('/admin');

    const routes = isTeacherPage ? teacherRoutes : isParentPage ? parentRoutes : isAdminPage ? adminRoutes : [];

    return (
        <div className="flex flex-col w-full">
            <h2 className="uppercase text-sm ml-2 p-2 text-slate-400">Pages</h2>
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
                        <h2 className="uppercase text-sm ml-2 p-2 text-slate-400">Groups</h2>

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