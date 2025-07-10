import { Student } from "../interfaces/Student";

const StudentListing = ({student}: {student: Student}) => {
    const handleDelete = () => {
        const students = JSON.parse(localStorage.getItem('students') || '[]');
        const updatedStudents = students.filter((s: Student) => s.rollNo !== student.rollNo);
        localStorage.setItem('students', JSON.stringify(updatedStudents));
        window.location.reload();
    }

  return (
    <li className="py-4 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <div className="w-1/3">
          <h3 className="text-lg font-semibold">{student.name}</h3>
          <p className="text-gray-600">{student.department}</p>
        </div>
        <div className="w-1/3">
          <p className="text-gray-600">{student.rollNo}</p>
          <p className="text-gray-600">{student.contact}</p>
        </div>
        <div className="w-1/3">
          <div className="underline text-zinc-600 cursor-pointer text-center" onClick={handleDelete}>Delete</div>
        </div>
      </div>
    </li>
  )
}

export default StudentListing
