import { FaSearch } from "react-icons/fa";

const Tournaments = () => {
  return (
    <>
    <h1 className="text-white py-3 text-center bg-black text-3xl">Tournaments</h1>
    <div className="tournament flex justify-center items-center">
      <div className="w-[40%] flex flex-col gap-2">
      <h1 className="text-white font-mono text-xl">Search for Leagues</h1>
      <div className="flex gap-1 items-center ">
         <input type="text" className="w-full p-2 focus:outline-none rounded-md bg-transparent border-2 border-blue-600 text-white"/> 
          <FaSearch className="text-green-300 text-lg"/>
      </div>
       </div>
    </div>
    </>
  )
}

export default Tournaments
