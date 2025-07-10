import BookPage from "./pages/BookPage"
import HomePage from "./pages/HomePage"
import RootLayout from "./pages/layouts/RootLayout"
import LoginPage from "./pages/LoginPage"
import { BrowserRouter, Routes, Route } from "react-router"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="books" element={<BookPage />} />
        </Route>
        
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App