import { useState } from "react";
import { useNavigate } from "react-router";

const LoginCard = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { adminId, adminPassword } = JSON.parse(localStorage.getItem('adminCredentials') || '{"adminId":"admin","adminPassword":"password"}');

    if (userId === adminId && password === adminPassword) {
      localStorage.setItem('isAdmin', 'true');
    } else {
      localStorage.setItem('isAdmin', 'false');
    }

    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userData', JSON.stringify({ userId, password }));

    navigate('/');
  }

  return (
    <div className="bg-zinc-100 shadow-sm rounded-lg p-8 max-w-sm w-full">
      <h2 className="text-lg mb-8 text-center">Login and Explore</h2>
      <form className="flex flex-col gap-8">
        <div>
          <label className="font-medium block mb-2" htmlFor="user-id">User ID</label>
          <input className="border border-zinc-300 p-2 rounded-sm outline-0 w-full bg-zinc-50 caret-zinc-300" type="text" id="user-id" name="user-id" onChange={(e) => setUserId(e.target.value)} required />
        </div>
        <div>
          <label className="font-medium block mb-2" htmlFor="password">Password</label>
          <input className="border border-zinc-300 p-2 rounded-sm outline-0 w-full bg-zinc-50 caret-zinc-300" type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button className="bg-blue-500 px-24 py-2 text-zinc-50 rounded-sm self-center uppercase font-bold cursor-pointer" type="submit" onClick={handleSubmit}>Login</button>
      </form>
    </div>
  )
}

export default LoginCard
