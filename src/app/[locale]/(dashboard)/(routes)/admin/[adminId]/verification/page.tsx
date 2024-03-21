'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { VerifyTeacherTable } from "@/components/verify-teacher-table";
import { VerifyChildrenTable } from "@/components/verify-children-table";

export default function VerificationPage() {

    const [teachers, setTeachers] = useState([]);
    const [children, setChildren] = useState([]);

    useEffect(() => {
        const fetchTeacherData = async () => {
            try {
                const response = await axios.get('/api/teachers');
                setTeachers(response.data);
            } catch (err) {
                toast.error('Something went wrong');
            }
        }

        const fetchChildrenData = async () => {
            try {
                const response = await axios.get('/api/parents/children');
                setChildren(response.data);
            } catch (error) {

            }
        }

        fetchTeacherData();
        fetchChildrenData();
    }, []);

    return (
        <div className="p-12">
            <div>
                <h1 className="text-3xl font-bold">Verification</h1>
                <div className="mt-12">
                    <div>
                        <h2 className="text-2xl text-semibold">Verify Teachers</h2>
                        <div>
                            <VerifyTeacherTable/>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h2 className="text-2xl text-semibold">Verify Children</h2>
                        <div>
                            <VerifyChildrenTable/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}