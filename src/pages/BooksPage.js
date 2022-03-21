import { useEffect, useState } from "react"

const BooksPage = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
  }, [])

  return (
    <>
      {books.length === 0 && <div>Loading...</div>}
      {books.map((book) => (
        <div className="book" key={book.id}>
          <h2>{book.name}</h2>
          <p>{book.author}</p>
          <p>{book.sold}</p>
        </div>
      ))}
    </>
  )
}

export default BooksPage
