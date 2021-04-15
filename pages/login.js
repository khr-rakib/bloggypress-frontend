import Link from 'next/link'
import { useState } from 'react'
import { toast } from "react-toastify"
import { authenticate, isAuth, login } from "../actions/authAction"
import Layout from "../components/Layout"
import Loading from "../components/Loading"
import Router from 'next/router'

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        loading: false
    })
    
    const { email, password, loading } = values
    
    const handleChange = e => {
        setValues({...values, [e.target.name]: e.target.value })
    }
    const handleSubmit = e => {
        e.preventDefault()
        setValues({...values, loading: true})
        login(email, password)
            .then(data => {
                if (data.error) {
                    setValues({...values, password: '', loading: false})
                    return toast.error(data.error)
                } else {
                    setValues({ ...values, email: '', password: '', loading: false })
                    toast.success('Logged in')
                    authenticate(data, () => {
                        if (isAuth() && isAuth().role === 1) {
                            Router.push('/admin')
                        } else if(isAuth() && isAuth().role === 0) {
                            Router.push('/user')
                        }
                    })
                }
            })
    }
    return (
        <Layout title="Login">
            <div className="container">
                <div className="row">
                    <div className="col-md-12" style={{background: '#eee', padding: '50px'}}>
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" className="form-control" value={email} name="email" onChange={handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" value={password} name="password" onChange={handleChange} />
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                        <button className="btn btn-info" type="submit">Login {loading && <Loading/>}</button>
                                        <Link href="/auth/password/forgot">
                                            <a>Forgot password?</a>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Login