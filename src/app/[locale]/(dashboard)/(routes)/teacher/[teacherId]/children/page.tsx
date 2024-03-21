'use client'

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import internal from "stream";

interface ChildrenProps {
    id: number;
    firstName: string;
    lastName: string;
}

export default function ChildrenPage() {
    const [children, setChildren] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const fetchChildrenData = async () => {
            const response = await fetch('/api/children');
        }
    }, []);
    
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold">Children</h1>
            <div>
                <div>
                {children.map((child: ChildrenProps) => (
                    <div key={child.id}>
                        <h2>{`${child.firstName} ${child.lastName}`}</h2>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}