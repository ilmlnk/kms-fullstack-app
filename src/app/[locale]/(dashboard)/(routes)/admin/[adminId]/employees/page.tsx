'use client'

import { useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { LucideIcon as Icon, UserRoundPlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const teachers = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'jdoe@me.com',
        phoneNumber: '555-555-5555',
        username: 'jdoe',
    },
    {
        id: 2,
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jdoe@me.com',
        phoneNumber: '555-555-5555',
        username: 'jdoe',
    },

];

export default function EmployeesPage() {
    const router = useRouter();
    useEffect(() => {
        const fetchEmployeeData = async () => {
            try {

            } catch (error) {

            }
        }

        fetchEmployeeData();
    }, []);

    return (
        <div className="p-12">
            <h1 className="text-3xl font-bold">Employees</h1>
            <div className="flex gap-4 mt-8">
                {teachers.map((teacher) => (
                    <div key={teacher.id} className="w-[300px] rounded-lg border bg-card text-card-foreground shadow-sm p-8">
                        <Image alt="ceo" className="rounded-md" src={'/ceo.jpg'} width={300} height={300} />
                        <div className="flex place-content-between mt-4">
                            <h1 className="text-2xl font-bold">{teacher.firstName} {teacher.lastName}</h1>
                            <Button variant="outline">...</Button>
                        </div>
                        <div>
                            <p className="text-slate-500">Email: {teacher.email}</p>
                            <p className="text-slate-500">Phone: {teacher.phoneNumber}</p>
                            <p className="text-slate-500">Username: {teacher.username}</p>
                        </div>
                    </div>
                ))}
                <div className="w-[300px] rounded-lg 
                hover:scale-102 hover:bg-slate-900 
                transition duration-150 cursor-pointer 
                border-4 border-dashed bg-card text-card-foreground
                text-center shadow-sm p-8 flex flex-col justify-center
                " onClick={() => router.push('verification')}>
                    <div className="flex items-center justify-center mb-4">
                        <UserRoundPlusIcon size={64} className="text-slate-500" />
                    </div>
                    <h1 className="text-slate-500 text-xl">Add Employee</h1>
                </div>
            </div>
        </div>
    )
}