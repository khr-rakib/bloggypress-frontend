import { useEffect } from 'react'
import Router from 'next/router'
import { isAuth } from '../../actions/authAction'

const Admin = ({ children }) => {
    useEffect(() => {
        if (!isAuth()) {
            Router.push('/login')
        } else if (isAuth().role !== 1) {
            Router.push('/user')            
        }
    }, [])
    return (
        <>{ children }</>
    )
}

export default Admin