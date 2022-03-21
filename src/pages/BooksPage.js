const books = [
  {
    id: 1,
    name: "Don Quixote",
    author: "Miguel de Cervantes",
    sold: 500,
  },
  {
    id: 2,
    name: "A Tale of Two Cities",
    author: "Charles Dickens",
    sold: 200,
  },
  {
    id: 3,
    name: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    sold: 150,
  },
]

const BooksPage = () => {
  return (
    <>
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
