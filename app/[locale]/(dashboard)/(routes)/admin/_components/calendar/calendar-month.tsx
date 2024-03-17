import React from "react"
import { Day } from "./calendar-day"

interface CalendarMonthProps {
    month: any
}

export const CalendarMonth = ({
    month
}: CalendarMonthProps) => {
    return (
        <div className="flex-1 grid grid-cols-7 grid-rows-5">
            {month.map((row: any, i: any) => {
                <React.Fragment key={i}>
                    {row.map((day: any, idx: any) => (
                        <Day day={day} key={idx} />
                    ))}
                </React.Fragment>
            })}
        </div>
    )
}