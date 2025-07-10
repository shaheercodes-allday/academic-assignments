import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const HomePage = () => {
    const navigate = useNavigate();
    const [totalBooks, setTotalBooks] = useState(0);
    const [totalStudents, setTotalStudents] = useState(0);

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        if (!isLoggedIn) navigate('/login');

        const totalBooksCount = JSON.parse(localStorage.getItem('books') || '[]').length;
        setTotalBooks(totalBooksCount);

        const totalStudentsCount = JSON.parse(localStorage.getItem('students') || '[]').length;
        setTotalStudents(totalStudentsCount);
    }, []);

  return (
    <div className="flex items-center justify-center h-screen gap-12 bg-zinc-100">
      <div className="w-[230px] flex flex-col items-center py-16 gap-12 bg-zinc-600 text-zinc-50 rounded-lg shadow-sm">
        <h2 className="text-lg font-medium">Total Books</h2>
        <p className="text-9xl">{totalBooks}</p>
      </div>

      <div className="w-[230px] flex flex-col items-center py-16 gap-12 bg-purple-400 text-zinc-50 rounded-lg shadow-sm">
        <h2 className="text-lg font-medium">Total Students</h2>
        <p className="text-9xl">{totalStudents}</p>
      </div>
    </div>
  )
}

export default HomePage