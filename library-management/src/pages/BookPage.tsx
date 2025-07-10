import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import BookCard from "../components/cards/BookCard";
import { Book } from "../interfaces/Book";

const BookPage = () => {
    const [books, setBooks] = useState([]);

    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        }

        const booksData = JSON.parse(localStorage.getItem('books') || '[]');
        setBooks(booksData);
    }, []);

  return (
    <section className="pt-32 px-8 flex items-start gap-12 h-screen bg-zinc-100">
      {books.map((book: Book) => (
        <BookCard key={book.isbn} book={book} />
      ))}
    </section>
  )
}

export default BookPage
