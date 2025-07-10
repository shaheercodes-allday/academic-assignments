import BookIssueCard from "../components/cards/BookIssueCard"

const ViewIssuedBooksPage = () => {
    const issuedBooks = JSON.parse(localStorage.getItem('issuedBooks') || '[]')

  return (
    <section className="flex flex-col gap-4 px-8 pt-28 pb-8">
      <div>
        <h3 className="text-lg font-semibold">{issuedBooks.length} entries</h3>
      </div>
      <div>
        {issuedBooks.map((issuedBookData, idx) => <BookIssueCard key={idx} issuedBookData={issuedBookData} />)}
      </div>
      {
        issuedBooks.length <= 0 && 
          <div className="absolute flex flex-col items-center text-2xl text-zinc-400 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <img className="w-44" src="book-stack.png" alt="" />
            <p>There are no books issued</p>
          </div>
      }
    </section>
  )
}

export default ViewIssuedBooksPage
