import { Link } from "react-router-dom"
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoGameController } from "react-icons/io5";

const Navbar = () => {
      let[drop , setdrop] = useState(false)

      let sitems = ['Create League' , 'Tournaments' ]
  return (
    <>
    <div className="nav flex justify-around items-center gap-7 bg-purple-950 py-4" >
      <IoGameController className="text-green-300 text-3xl"/>

      <div className="flex items-center gap-7">

        <Link to='/' className="text-white" onMouseOver={()=>setdrop(false)} >Home</Link>

        <Link to='contact' className="text-white" onMouseOver={()=>setdrop(false)}>Contact</Link>

        <div className="">
        <p className="flex gap-1 items-center text-white cursor-pointer" onMouseOver={()=>setdrop(true)} onClick={()=>setdrop(!drop)}>Services
          {!drop ? <IoIosArrowDown/> : <IoIosArrowUp/>}
        </p>

        <div className={`flex flex-col  max-w-fit space-y-2 bg-[#102C57] p-3 rounded-md ${drop || 'hidden' } `}  id="drop">
          {
           sitems.map((x , i) => (
           <Link to={`/${x.toLowerCase()}`} onClick={()=>setdrop(false)}><p key={i} className="text-sm text-white ">{x}</p></Link>
                            ))
                         }
        </div>

      </div>

    </div> 

    <button className="bg-blue-600 px-3 py-2 rounded-md text-white">
      <Link to='/login'>Login</Link></button>
  </div>
  
  </>
  )
}

export default Navbar
