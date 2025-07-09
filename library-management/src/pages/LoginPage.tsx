import LoginCard from "../components/cards/LoginCard"
import Header from "../components/Header"

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-200">
      <Header />
      <LoginCard />
    </div>
  )
}

export default LoginPage
