import { useState } from "react";
import AddStudentCard from "../components/cards/AddStudentCard";
import StudentListing from "../components/StudentListing";
import { Student } from "../interfaces/Student";

const StudentPage = () => {
    const students = JSON.parse(localStorage.getItem('students') || '[]');
    const [isAddStudentCardVisible, setIsAddStudentCardVisible] = useState(false);

  return (
    <section className="flex flex-col gap-8 px-8 pt-28 pb-8">
        <div>
            <div className="inline-block self-start rounded-md px-6 py-2 border-2 border-zinc-400 text-zinc-500 underline font-medium cursor-pointer" onClick={() => setIsAddStudentCardVisible(true)}>Add student</div>
        </div>

        {isAddStudentCardVisible && <AddStudentCard setIsAddStudentCardVisible={setIsAddStudentCardVisible} />}

        <ul>
            {students.map((student: Student) => (
            <StudentListing student={student} key={student.rollNo} />
            ))}
        </ul>
    </section>
  )
}

export default StudentPage
