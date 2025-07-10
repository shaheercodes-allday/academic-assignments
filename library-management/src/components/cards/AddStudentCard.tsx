import { useState } from "react";

const AddStudentCard = ({setIsAddStudentCardVisible}) => {
    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');
    const [rollNo, setRollNo] = useState(0);
    const [contact, setContact] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newStudent = {
            name,
            department,
            rollNo,
            contact,
        };
        const students = JSON.parse(localStorage.getItem('students') || '[]');
        students.push(newStudent);
        localStorage.setItem('students', JSON.stringify(students));
        window.location.reload();
    }

  return (
    <article className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-purple-50 px-6 py-8 rounded-lg shadow-sm w-[50%] max-w-[600px] z-50">
      <h2 className="text-lg font-semibold text-center">Add Student</h2>
      <form className="flex flex-col gap-4 mt-8">
        <input type="text" placeholder="Name" className="border border-zinc-200 p-2 rounded outline-0 caret-zinc-400" onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Department" className="border border-zinc-200 p-2 rounded outline-0 caret-zinc-400" onChange={(e) => setDepartment(e.target.value)} />
        <input type="number" placeholder="Roll No" className="border border-zinc-200 p-2 rounded outline-0 caret-zinc-400" onChange={(e) => setRollNo(Number(e.target.value))} />
        <input type="text" placeholder="Contact" className="border border-zinc-200 p-2 rounded outline-0 caret-zinc-400" onChange={(e) => setContact(e.target.value)} />
        <button type="submit" className="bg-zinc-700 text-white py-2 rounded cursor-pointer hover:bg-zinc-800 transition duration-300" onClick={handleSubmit}>Add Student</button>
      </form>

      <div className="absolute top-4 right-8 text-zinc-500 cursor-pointer hover:text-zinc-800 transition duration-300 text-3xl" onClick={() => setIsAddStudentCardVisible(false)}>&times;
      </div>
    </article>
  )
}

export default AddStudentCard
