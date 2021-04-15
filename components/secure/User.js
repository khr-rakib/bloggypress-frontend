import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { isAuth } from '../../actions/authAction'

const User = ({ children }) => {
    const router = useRouter()
    useEffect(() => {
        if (!isAuth()) {
            router.push('/login')
        } else if (isAuth().role !== 0) {
            router.push('/admin')
        }
    }, [router])
    return (
        <>{ children }</>
    )
}

export default User