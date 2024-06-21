import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className=" flex pt-[50px] lg:pt-0 lg:items-center " id="headimg">
    <div className="flex flex-col gap-8 lg:flex-row  lg:justify-around items-center">

    <div className="logo h-[337px] w-[337px] lg:h-[500px] lg:w-[500px] overflow-hidden rounded-xl"></div>
      
      <div className="des md:w-[80%] lg:w-[40%] space-y-5  px-5 py-2 lg:px-3">
       <p className="text-xl md:text-3xl font-semibold text-white">Manage Tournaments with us 💯</p>
       <p className=" text-md md:text-xl text-white ">Welcome to our tournament management system , where you can create all your Tournaments , manage teams , scores and leages all at one place......</p>
       <button className="p-3  bg-gradient-to-r from-purple-700 to-blue-500  rounded-md text-xl font-medium text-white
        hover:from-blue-500 hover:to-purple-700 " id="btn">
        <Link to='/create league' >Get started</Link> <i className="bi bi-arrow-right"></i></button>
      </div>

      
    </div>
 </div>
  )
}

export default Home
