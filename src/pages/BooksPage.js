import { useEffect, useState } from "react"

const BooksPage = () => {
  const [books, setBooks] = useState([])

  const fetchBooks = () => {
    fetch("http://localhost:3001/books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
  }

  // Fetch data after first render
  useEffect(() => {
    fetchBooks()
  }, [])

  // Input states
  const [name, setName] = useState("")
  const [author, setAuthor] = useState("")
  const [sold, setSold] = useState("")

  // Post book to API
  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = {
      name: name,
      author: author,
      sold: sold,
    }
    fetch("http://localhost:3001/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((res) => {
      if (res.status === 201) {
        fetchBooks()
        setSold("")
        setAuthor("")
        setName("")
      }
    })
  }

  return (
    <>
      {books.length === 0 && <div>Loading...</div>}
      <div className="books-wrapper">
        <div className="books">
          {books.map((book) => (
            <div className="book" key={book.id}>
              <h2>{book.name}</h2>
              <p>{book.author}</p>
              <p>{book.sold} million books sold</p>
            </div>
          ))}
        </div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            {/* Book's name input */}
            <label>Name</label>
            <input
              placeholder="type book's name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {/* Author input */}
            <label>Author</label>
            <input
              placeholder="type author..."
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            {/* Sold input */}
            <label>Sold</label>
            <input
              placeholder="type sold..."
              value={sold}
              onChange={(e) => setSold(e.target.value)}
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default BooksPage
