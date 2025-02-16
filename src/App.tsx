import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar/navbar"


function App() {

  return (
    <div className="p-[10px] m-[10px] flex items-start  mt-[100px] border-2 border-black rounded-md">
    <Navbar/>
    <Outlet/>
    </div>
  )
}

export default App
