import BookPage from "./pages/BookPage"
import HomePage from "./pages/HomePage"
import RootLayout from "./pages/layouts/RootLayout"
import LoginPage from "./pages/LoginPage"
import { BrowserRouter, Routes, Route } from "react-router"
import StudentPage from "./pages/StudentPage"
import IssueBookPage from "./pages/IssueBookPage"
import ViewIssuedBooksPage from "./pages/ViewIssuedBooksPage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="books" element={<BookPage />} />
          <Route path="students" element={<StudentPage />} />
          <Route path="issue-book" element={<IssueBookPage />} />
          <Route path="view-issued-books" element={<ViewIssuedBooksPage />} />
        </Route>
        
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App