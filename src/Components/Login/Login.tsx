import { useContext } from "react"
import { mainContet } from "../../Context/Context"
import { useLocation, useNavigate } from "react-router-dom"

function Login() {

    const {user, setUser} = useContext(mainContet)
    const navigate = useNavigate()
    const location = useLocation()

    console.log(user);
    


    const loginFunction = (e:any)=>{
        e.preventDefault()
        const mail = e.target.email.value
        const pass = e.target.password.value
        const verifymail = import.meta.env.VITE_mail
        const verifypass = import.meta.env.VITE_Pass

        if (mail === verifymail && pass === verifypass) {
            setUser(true)
            navigate(location.state)
        }
        else{
            alert("Try again")
            

        }
    }
  return (
    <div className="bg-[url('/logo.svg')] bg-cover bg-center h-screen flex flex-col items-center justify-center">
        <div className="bg-blue-300 w-[90%] md:w-[35%] p-[20px] rounded-2xl shadow-2xl">
            <form action="" className="flex flex-col gap-1.5" onSubmit={(e)=>loginFunction(e)}>
                <input className="border outline-none rounded-md p-[5px] text-xl w-full"  type="email" name="email" placeholder="Email"  id="" />
                <input className="border outline-none rounded-md p-[5px] text-xl w-full" type="password" name="password" placeholder="Password"  id="" />
                <input className="w-full bg-blue-400 text-blue-700 p-[5px] text-xl font-[500] rounded-md border border-blue-400 "  type="submit" value="Log in" />
            </form>
        </div>
    </div>
  )
}

export default Login