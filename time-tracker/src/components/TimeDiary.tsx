import { tasks } from "../data/data"
import DiaryCard from "./DiaryCard"

const TimeDiary = () => {
  return (
    <div className="flex flex-col gap-4">
      {tasks.map(task => <DiaryCard diaryTask={task} key={task.taskStartTime} />)}
    </div>
  )
}

export default TimeDiary
