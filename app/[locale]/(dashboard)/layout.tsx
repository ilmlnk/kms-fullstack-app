import { getServerSession } from "next-auth";
import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";
// import { authOptions } from "@/app/utils/auth";
import { RequireLoginPage } from "@/components/require-login-page";

export default async function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    // const session = await getServerSession(authOptions);

    return (
        <div className="h-full">
            <>
                <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
                    <Navbar />
                </div>
                <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
                    <Sidebar />
                </div>
                <main className="md:pl-56 h-full pt-[80px]">
                    {children}
                </main>
            </>
        </div>
    )
}
