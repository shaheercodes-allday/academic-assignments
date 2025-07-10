import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import BookCard from "../components/cards/BookCard";
import { Book } from "../interfaces/Book";
import AddBookCard from "../components/cards/AddBookCard";

const BookPage = () => {
    const [books, setBooks] = useState([]);
    const [isAddBookCardVisible, setIsAddBookCardVisible] = useState(false);

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
    <section className="flex flex-col gap-8 pt-28 pb-8 px-8 bg-zinc-100">
      <div className="inline-block self-start rounded-md px-6 py-2 mr-4 border-2 border-zinc-400 text-zinc-500 underline font-medium cursor-pointer" onClick={() => setIsAddBookCardVisible(true)}>Add book</div>

      {isAddBookCardVisible && <AddBookCard setIsAddBookCardVisible={setIsAddBookCardVisible} />}

      <div className="grid grid-cols-3 gap-8">
        {books.map((book: Book) => (
          <BookCard key={book.title} book={book} />
        ))}
      </div>
    </section>
  )
}

export default BookPage
