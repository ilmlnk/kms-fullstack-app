import { useEffect } from "react"
import axios from 'axios';
import { useState } from "react";
import toast from "react-hot-toast";
import { usePathname } from "next/navigation";

export default function ChildPage() {
    const [childFullName, setChildFullName] = useState('');
    const [childSubjects, setChildSubjects] = useState([]);

    const pathname = usePathname();
    const id = pathname?.split('/').pop();

    useEffect(() => {
        const fetchChildData = async () => {
            try {
                const response = await axios.get(`/api/children/${id}`);
                const responseFullName = response.data.firstName + ' ' + response.data.lastName;
                setChildFullName(responseFullName);
            } catch (err) {
                toast.error("Something went wrong");
            }
        };

        const fetchChildSubjectData = async () => {
            try {
                const response = await axios.get(`/api/children/${id}/subjects`);
                console.log(response.data);
                setChildSubjects(response.data);
            } catch (error) {
                toast.error("Something went wrong");
            }
        }

        fetchChildData();
        fetchChildSubjectData();
    }, []);
    return (
        <div>
            <h1 className="text-3xl font-bold">{childFullName}</h1>
            <div>
                
            </div>
        </div>
    )
}