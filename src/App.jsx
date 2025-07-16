function App() {
  return (
    <nav className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 pb-6  border-b-2 border-gray-400/60">
      <h1 className="flex items-center justify-center font-bold text-xl">Exclusive</h1> 
      <ul className="flex justify-between ">
        <li className="flex items-center"><a className="flex align-middle" href="#">Home</a></li>
        <li className="flex items-center"><a className="flex align-middle" href="#">Contact</a></li>
        <li className="flex items-center"><a className="flex align-middle" href="#">About</a></li>
        <li className="flex items-center"><a className="flex align-middle" href="#">Sing up</a></li>
      </ul>
      <div className="flex justify-center  ">
        <input className="w-[70%] border-1 border-r-0 rounded-sm"  type="text" placeholder="What are you looking for?" />
        <button className="hover:cursor-pointer border-1 rounded-sm p-1">🔍</button>
      </div>
      <div className="flex justify-evenly">
        <button>💖</button>
        <button>🛒</button>
        <button>👤</button>
      </div>
    </nav>

  )
}

export default App