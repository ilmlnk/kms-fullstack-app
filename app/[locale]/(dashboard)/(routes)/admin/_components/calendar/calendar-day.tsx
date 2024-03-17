import React from "react";

interface DayProps {
    day: any
}

export const Day = ({
    day
}: DayProps) => {
    return (
        <div>
            {day.format()}
        </div>
    )
}