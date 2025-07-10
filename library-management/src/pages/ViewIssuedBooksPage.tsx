import BookIssueCard from "../components/cards/BookIssueCard"

const ViewIssuedBooksPage = () => {
    const issuedBooks = JSON.parse(localStorage.getItem('issuedBooks') || '[]')

  return (
    <section className="flex flex-col gap-8 px-8 pt-28 pb-8">
      {issuedBooks.map((issuedBookData, idx) => <BookIssueCard key={idx} issuedBookData={issuedBookData} />)}
    </section>
  )
}

export default ViewIssuedBooksPage
