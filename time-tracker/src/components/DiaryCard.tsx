import { useEffect, useState } from "react"
import type { DiaryTask } from "../interface"

const DiaryCard = ({ diaryTask }: {diaryTask: DiaryTask}) => {
    const colorList = [
        "bg-amber-300",
        "bg-purple-300",
        "bg-pink-300",
        "bg-blue-300",
        "bg-orange-300",
        "bg-red-300",
        "bg-green-300"
    ]

    const [essentColor, setEssentColor] = useState("")
    const [remainingTime, setRemainingTime] = useState(0)

    function isCurrentTimeBetween(start: string, end: string): [boolean, number] {
        const now = new Date();
        const [currentHours, currentMinutes] = [now.getHours(), now.getMinutes()];

        const toMinutes = (timeStr: string): number => {
            const [hours, minutes] = timeStr.split(":").map(Number);
            return hours * 60 + minutes;
        };

        const currentTimeInMinutes = currentHours * 60 + currentMinutes;
        const startInMinutes = toMinutes(start);
        const endInMinutes = toMinutes(end);

        return [currentTimeInMinutes >= startInMinutes && currentTimeInMinutes <= endInMinutes, endInMinutes - currentTimeInMinutes];
    }

    useEffect(() => {
        const colorIdx = Math.floor(Math.random() * 7)
        console.log(colorIdx)
        setEssentColor(colorList[colorIdx])
        const [activeStatus, remainingTime] = isCurrentTimeBetween(diaryTask.taskStartTime, diaryTask.taskEndTime)
        diaryTask.isActive = activeStatus
        setRemainingTime(remainingTime)
    }, [])

  return (
    <div className={`flex items-center border-2 ${diaryTask.isActive ? "border-purple-200" : "border-zinc-100"} w-[70%] ${diaryTask.isActive ? "bg-white" : "bg-zinc-50"} rounded-lg`}>
      <div className="px-6 text-zinc-500 text-lg font-[monospace]">
        {diaryTask.taskStartTime}
         - 
        {diaryTask.taskEndTime}
      </div>

      <div className="flex grow justify-between items-center">
        <div className="px-6 py-4 relative">
            <div className={`absolute top-0 left-0 h-full w-1 ${essentColor}`}></div>

            <h3 className="text-zinc-700">Shaheer</h3>
            <h2 className="text-zinc-800 font-semibold">{diaryTask.taskTitle}</h2>
        </div>

        <div className="px-6 w-62">
            <h5 className="text-zinc-400 text-sm">Time remaining</h5>
            <h6 className="text-zinc-600">{Math.floor(remainingTime/60)} hour {remainingTime%60} minutes</h6>
        </div>
      </div>
    </div>
  )
}

export default DiaryCard
