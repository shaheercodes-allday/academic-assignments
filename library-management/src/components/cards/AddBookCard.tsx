import { useState } from "react";

const AddBookCard = ({setIsAddBookCardVisible}) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [coverImage, setCoverImage] = useState('');
    const [genre, setGenre] = useState('');
    const [booksCount, setBooksCount] = useState(0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if(title === '' || author === '' || description === '' || coverImage === '' || genre === '' || booksCount <= 0) {
            window.alert('Please fill all the fields.')
            return;
        }

        const newBook = {
            title,
            author,
            description,
            coverImage,
            genre,
            booksCount: Number(booksCount),
        };
        const books = JSON.parse(localStorage.getItem('books') || '[]');
        books.push(newBook);
        localStorage.setItem('books', JSON.stringify(books));
        window.location.reload();
    }

  return (
    <article className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-purple-50 px-6 py-8 rounded-lg shadow-sm w-[50%] max-w-[600px] z-50">
      <h2 className="text-lg font-semibold text-center">Add book</h2>
      <form className="flex flex-col gap-4 mt-8">
        <input type="text" placeholder="Title" className="border border-zinc-200 p-2 rounded outline-0 caret-zinc-400" onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Author" className="border border-zinc-200 p-2 rounded outline-0 caret-zinc-400" onChange={(e) => setAuthor(e.target.value)} required />
        <textarea placeholder="Description" className="border border-zinc-200 p-2 rounded h-24 outline-0 caret-zinc-400" onChange={(e) => setDescription(e.target.value)} required></textarea>
        <input type="text" placeholder="Cover URL" className="border border-zinc-200 p-2 rounded outline-0 caret-zinc-400" onChange={(e) => setCoverImage(e.target.value)} required />
        <input type="text" placeholder="Genre" className="border border-zinc-200 p-2 rounded outline-0 caret-zinc-400" onChange={(e) => setGenre(e.target.value)} required />
        <input type="number" placeholder="Books Count" className="border border-zinc-200 p-2 rounded outline-0 caret-zinc-400" onChange={(e) => setBooksCount(Number(e.target.value))} required />
        <button type="submit" className="bg-zinc-700 text-white py-2 rounded cursor-pointer hover:bg-zinc-800 transition duration-300" onClick={handleSubmit}>Add Book</button>
      </form>

      <div className="absolute top-4 right-8 text-zinc-500 cursor-pointer hover:text-zinc-800 transition duration-300 text-3xl" onClick={() => setIsAddBookCardVisible(false)}>&times;
      </div>
    </article>
  )
}

export default AddBookCard
