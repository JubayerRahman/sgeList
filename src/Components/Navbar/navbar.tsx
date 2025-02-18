import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-fit md:w-[20%] md:sticky md:top-2.5'>
        <ul className='flex border-2 md:border-0 rounded-md border-b-0 rounded-b-none  flex-row mt-[-46px] bg-white md:mt-0 md:flex-col  justify-between ml-[-12px] md:ml-0 items-center '>
            <li className='w-full h-full ' ><NavLink to="/" className="w-full h-full flex p-[5px] text-left">Application</NavLink></li> 
            <span className='md:hidden'>|</span>
            <li className='w-full h-full' ><NavLink to="/enquires" className="w-full h-full flex  p-[5px] text-left">Enquires</NavLink></li>
            <span className='md:hidden'>|</span>
            <li className='w-full h-full' ><NavLink to="/students" className="w-full h-full flex  p-[5px] text-left">Registrations </NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar