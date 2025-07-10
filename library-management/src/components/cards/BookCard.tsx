import { Book } from '../../interfaces/Book';

const BookCard = ({book}: {book: Book}) => {

  const handleDelete = () => {
    if (!window.confirm('Are you sure you want to delete this book?')) {
      return;
    }
    const books = JSON.parse(localStorage.getItem('books') || '[]');
    const updatedBooks = books.filter((b: Book) => b.isbn !== book.isbn);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
    window.location.reload();
  }

  return (
    <article className="bg-zinc-50 px-6 py-8 h-78 rounded-lg shadow-sm flex gap-8">
        <div className="self-center">
            <img src={book.coverImage} alt={book.title} className="w-36 object-cover rounded-md shadow-sm" />
        </div>
        <div className="self-start">
            <h2 className="text-xl font-semibold text-zinc-800">{book.title}</h2>
            <p className="text-sm mb-4 text-zinc-600">by {book.author}</p>
            <p className="w-64 mb-4">{book.description}</p>
            <div className="border-purple-200 border-2 inline-block py-2 px-4 rounded-full text-purple-400 text-sm mb-4">{book.genre}</div>
            <div className="text-zinc-600 mb-4">{book.booksCount} books</div>
            <div>
                <div className="inline-block mr-4 text-zinc-500 cursor-pointer underline">Edit</div>
                <div className="inline-block mr-4 text-zinc-500 cursor-pointer underline" onClick={handleDelete}>Delete</div>
            </div>
        </div>
    </article>
  )
}

export default BookCard
