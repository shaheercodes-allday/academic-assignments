import { useState } from "react";
import { Book } from "../interfaces/Book";
import { Student } from "../interfaces/Student";

const IssueBookPage = () => {
    const books = JSON.parse(localStorage.getItem('books') || '[]');
    const students = JSON.parse(localStorage.getItem('students') || '[]')
    const [selectedBook, setSelectedBook] = useState('');
    const [selectedStudent, setSelectedStudent] = useState(0);

    const getUniqueId = (): string => {
      let keyArray: number[] = []
      for (let i = 0; i < 6; i++) {
        keyArray.push(Math.floor(Math.random() * 10))
      }
      return keyArray.join('')
    }

    const HandleIssueBook = (e: React.FormEvent) => {
        e.preventDefault();

        if (selectedBook === '' || selectedStudent === 0) {
          window.alert('Please select a book and a student to issue the book.')
          return
        }

        const book = books.find((b: Book) => b.title === selectedBook);

        if (book.booksCount <= 0) {
          window.alert(`Sorry! ${book.title} is not available in library!!`)
          return
        }

        const student = students.find((s: Student) => s.rollNo === selectedStudent);

        if (book && student) {
            const issuedBooks = JSON.parse(localStorage.getItem('issuedBooks') || '[]');
            const date = new Date()
            issuedBooks.push({ issueId: getUniqueId(), bookTitle: book.title, studentName: student.name, date: date.toLocaleDateString() });
            localStorage.setItem('issuedBooks', JSON.stringify(issuedBooks));

            book.booksCount -= 1;
            localStorage.setItem('books', JSON.stringify(books));

            setSelectedBook('');
            setSelectedStudent(0);
        }
    }

  return (
    <section className="flex items-center justify-center h-screen px-8 pt-28 pb-8">
      <form className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-purple-50 px-6 py-8 rounded-lg shadow-sm w-[50%] max-w-[600px] z-50 flex flex-col gap-4">
        <select value={selectedStudent} onChange={(e) => setSelectedStudent(Number(e.target.value))} className="outline-0 py-2 border-b border-purple-300">
            <option value="">Student</option>
          {students.map((student: Student) => <option className="bg-zinc-50 text-zinc-700" key={student.rollNo} value={student.rollNo}>{student.name}</option>)}
        </select>
        <select value={selectedBook} onChange={(e) => setSelectedBook(e.target.value)} className="outline-0 py-2 border-b border-purple-300">
            <option value="">Book</option>
          {books.map((book: Book) => <option className="bg-zinc-50 text-zinc-700" key={book.title} value={book.title}>
              {book.title}
          </option>)}
        </select>
        <button className="bg-zinc-700 text-white py-2 rounded cursor-pointer hover:bg-zinc-800 transition duration-300" onClick={HandleIssueBook}>Issue Book</button>
      </form>
    </section>
  )
}

export default IssueBookPage
