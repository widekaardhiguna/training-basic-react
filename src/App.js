import { useState } from "react"
import Counter from "./components/Counter"
import AboutPage from "./pages/AboutPage"
import CounterPage from "./pages/CounterPage"
import BooksPage from "./pages/BooksPage"

function App() {
  const [currentPage, setCurrentPage] = useState("books")

  return (
    <>
      <nav className="nav">
        <h1>React Training</h1>
        <ul>
          <li onClick={() => setCurrentPage("about")}>About</li>
          <li onClick={() => setCurrentPage("counter")}>Counter</li>
          <li onClick={() => setCurrentPage("books")}>Books</li>
        </ul>
      </nav>
      <div className="container">
        {currentPage === "about" && <AboutPage />}
        {currentPage === "counter" && <CounterPage />}
        {currentPage === "books" && <BooksPage />}
      </div>
    </>
  )
}

export default App
