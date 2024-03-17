import { ScheduleCalendar } from "../../_components/schedule-calendar";

export default function ManageSchedulePage() {
    return (
        <div className="p-12">
            <h1 className="text-3xl font-bold">Manage Schedule</h1>
            <div>
                <ScheduleCalendar/>
            </div>
        </div>
    )
}