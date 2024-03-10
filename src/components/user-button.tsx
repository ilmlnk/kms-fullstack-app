import {
    Cloud,
    CreditCard,
    Github,
    BookMarked,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    MessageCircle,
    LayoutDashboardIcon,
} from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { AvatarFallback } from "@radix-ui/react-avatar";
import { Avatar } from '@nextui-org/react';
import Link from "next/link";
import { usePathname } from "next/navigation";

export const UserButton = () => {
    const pathname = usePathname();
    const isTeacherPage = pathname?.includes('/teacher');
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="cursor-pointer">
                <Avatar className="border-2 border-slate-300 bg-slate-200 w-[40px] h-[40px]" showFallback src='https://images.unsplash.com/broken' />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <Link href={isTeacherPage ? "/teacher/profile" : "/user/profile"}>
                        <DropdownMenuItem className="cursor-pointer">
                            <User className="mr-2 h-4 w-4" />
                            <span>Profile</span>
                        </DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem>
                        <LayoutDashboardIcon className="mr-2 h-4 w-4" />
                        <span>Dashboard</span>
                    </DropdownMenuItem>

                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <BookMarked className="mr-2 h-4 w-4" />
                        <span>Courses</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <MessageCircle className="mr-2 h-4 w-4" />
                        <span>Messages</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                        <DropdownMenuShortcut></DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}