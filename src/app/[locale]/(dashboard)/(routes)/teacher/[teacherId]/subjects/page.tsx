'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SubjectsPage = () => {
    const pathname = usePathname();
    const userId = pathname.split('/')[2];
    return (
        <div className="p-16">

            <Link href={`/teacher/${userId}/create-subject`}>
                <Button>
                    Create New Subject
                </Button>
            </Link>
        </div>
    );
}

export default SubjectsPage;