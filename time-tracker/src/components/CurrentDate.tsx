import { useEffect, useState } from "react"

const CurrentDate = () => {
    interface Time {
        date: number;
        month: string;
        year: number;
    }

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const [currentDateTime, setCurrentDateTime] = useState<Time>({
        date: 0,
        month: "",
        year: 2000
    })

    useEffect(() => {
        const dateTime = new Date()
        setCurrentDateTime({
            date: dateTime.getDate(),
            month: months[dateTime.getMonth()],
            year: dateTime.getFullYear()
        })
    }, [])

    return (
        <div className="px-8 py-4 bg-[#F1D9FA] rounded-full inline-block">
            <div className="flex items-center gap-4 font-semibold text-[#8A599C]">
                <div>{currentDateTime.date}</div>
                <div>{currentDateTime.month}</div>
                <div>{currentDateTime.year}</div>
            </div>
        </div>
    )
}

export default CurrentDate
