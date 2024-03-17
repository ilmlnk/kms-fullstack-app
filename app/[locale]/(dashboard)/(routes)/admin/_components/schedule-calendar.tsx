'use client'

import { useState } from "react"
import { CalendarHeader } from "./calendar/calendar-header"
import { CalendarMonth } from "./calendar/calendar-month"
import { CalendarSidebar } from "./calendar/calendar-sidebar"
import { getMonth } from "@/lib/utils"

export const ScheduleCalendar = () => {
    const [currentMonth, setCurrentMonth] = useState(getMonth());
    return (
        <div className="h-screen flex flex-col">
            <CalendarHeader/>
            <div className="flex flex-1">
                <CalendarSidebar/>
                <CalendarMonth month={currentMonth}/>
            </div>
        </div>
    )
}