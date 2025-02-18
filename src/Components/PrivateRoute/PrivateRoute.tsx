import { useContext } from 'react'
import { mainContet } from '../../Context/Context'
import { Navigate, useLocation } from 'react-router-dom'

function PrivateRoute({children}:any) {

    const {user} = useContext(mainContet)
    const pathName = useLocation()

    if (user === false) {
        return <Navigate state={pathName} to="/login" />
    }
    return children
}

export default PrivateRoute