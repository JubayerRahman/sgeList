import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-[20%]'>
        <ul className='flex flex-col  justify-between '>
            <li className='w-full h-full ' ><NavLink to="/" className="w-full h-full flex p-[5px] text-left">Application</NavLink></li>
            <li className='w-full h-full' ><NavLink to="/enquires" className="w-full h-full flex  p-[5px] text-left">Enquires</NavLink></li>
            <li className='w-full h-full' ><NavLink to="/students" className="w-full h-full flex  p-[5px] text-left">Registrations </NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar