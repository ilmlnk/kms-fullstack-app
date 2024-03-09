import { Button } from "@/components/ui/button";
import Link from "next/link";

const CoursesPage = () => {
    return (
        <div className="p-16">
            <Link href="/teacher/create-subject">
                <Button>
                    Create New Subject
                </Button>
            </Link>
        </div>
    );
}

export default CoursesPage;