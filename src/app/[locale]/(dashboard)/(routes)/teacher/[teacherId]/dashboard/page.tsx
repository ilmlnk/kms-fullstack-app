'use client'

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";


export default function DashboardPage() {
    const router = useRouter();


    return (
        <div className="p-12">
            <div>
                <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
                <div className="grid grid-cols-2 gap-8">
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-8">
                        <div className="flex place-content-between">
                            <h1 className="text-2xl font-bold">Documents</h1>
                            <Button variant="outline">...</Button>
                        </div>
                    </div>
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-8">
                        <div className="flex place-content-between">
                            <h1 className="text-2xl font-bold">Group Management</h1>
                            <Button variant="outline">...</Button>
                        </div>
                    </div>
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-8">
                        <div className="flex place-content-between">
                            <h1 className="text-2xl font-bold">Verification</h1>
                            <Button onClick={() => router.push('')} variant="outline">...</Button>
                        </div>
                        <div>
                            {/*<VerificationCard />*/}
                        </div>
                    </div>
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-8">
                        <div className="flex place-content-between">
                            <h1 className="text-2xl font-bold">Manage Schedule</h1>
                            <Button variant="outline">...</Button>
                        </div>
                        <div className="mt-4">
                            <h1 className="text-xl font-semibold text-slate-400">Upcoming Events</h1>
                            <div>

                                {/*<UpcomingEvent />*/}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 rounded-lg border bg-card text-card-foreground shadow-sm p-8">
                    <div className="flex place-content-between">
                        <h1 className="text-2xl font-bold">Payments</h1>
                        <Button variant="outline">...</Button>
                    </div>
                    <div>
                        {/*<PaymentTable />*/}
                    </div>
                </div>
            </div>
        </div>
    )
}