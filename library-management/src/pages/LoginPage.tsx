import { useEffect } from "react";
import LoginCard from "../components/cards/LoginCard"
import Header from "../components/Header"
import { useNavigate } from "react-router";

const LoginPage = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-200">
      <Header />
      <LoginCard />
    </div>
  )
}

export default LoginPage
