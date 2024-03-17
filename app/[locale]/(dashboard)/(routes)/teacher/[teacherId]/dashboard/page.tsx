import { CourseCard } from "@/components/notification-panel";

export default function DashboardContent() {
    return (
        <div className="p-32">
            <div className="grid grid-cols-3 gap-4">
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
            </div>
        </div>
    );
}