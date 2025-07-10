const BookIssueCard = ({ issuedBookData }: { issuedBookData: any }) => {
  return (
    <article className="flex justify-between">
        <div className="w-1/3"><span className="font-semibold">Book Title:</span> {issuedBookData.bookTitle}</div>
        <div className="w-1/3"><span className="font-semibold">Issued To:</span> {issuedBookData.studentName}</div>
        <div className="w-1/3"><span className="font-semibold">Issue Date:</span> {issuedBookData.date}</div>
    </article>
  )
}

export default BookIssueCard
