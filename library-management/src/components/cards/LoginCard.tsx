const LoginCard = () => {
  return (
    <div className="bg-zinc-100 shadow-sm rounded-lg p-8 max-w-sm w-full">
      <h2 className="text-lg mb-8 text-center">Login and Explore</h2>
      <form className="flex flex-col gap-8">
        <div>
          <label className="font-medium block mb-2" htmlFor="user-id">User ID</label>
          <input className="border border-zinc-300 p-2 rounded-sm outline-0 w-full bg-zinc-50 caret-zinc-300" type="text" id="user-id" name="user-id" required />
        </div>
        <div>
          <label className="font-medium block mb-2" htmlFor="password">Password</label>
          <input className="border border-zinc-300 p-2 rounded-sm outline-0 w-full bg-zinc-50 caret-zinc-300" type="password" id="password" name="password" required />
        </div>
        <div>
          <input className="accent-amber-300 scale-125" type="checkbox" name="i-am-an-admin" id="i-am-an-admin" />
          <label className="ml-2 font-medium" htmlFor="i-am-an-admin">I am an admin</label>
        </div>
        <button className="bg-amber-500 px-24 py-2 text-zinc-50 rounded-sm self-center uppercase font-bold cursor-pointer" type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginCard
