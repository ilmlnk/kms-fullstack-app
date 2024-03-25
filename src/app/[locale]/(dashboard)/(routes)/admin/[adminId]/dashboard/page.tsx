'use client'

import { Button } from "@/components/ui/button";
import { VerificationCard } from "../../_components/verification-card";
import { PaymentTable } from "../../_components/payment-table";
import { useRouter } from "next/navigation";
import { UpcomingEvent } from "../../_components/upcoming-event";
import { Separator } from "@/components/ui/separator";
import toast from "react-hot-toast";
import axios from "axios";
import { useEffect } from "react";

export default function DashboardPage() {
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/admin');
            } catch (error) {
                toast.error("Something went wrong");
            }
        }
    });
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
                        <div>

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
                            <VerificationCard />
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

                                <UpcomingEvent />
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
                        <PaymentTable />
                    </div>
                </div>
            </div>
        </div>
    )
}