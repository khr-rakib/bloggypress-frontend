import { useState } from 'react'
import { toast } from "react-toastify"
import { login } from "../actions/authAction"
import Layout from "../components/Layout"

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    
    const { email, password } = values
    
    const handleChange = e => {
        setValues({...values, [e.target.name]: e.target.value })
    }
    const handleSubmit = e => {
        e.preventDefault()
        login(email, password)
            .then(data => {
                if (data.error) {
                    setValues({...values, password: ''})
                    return toast.error(data.error)
                } else {
                    setValues({...values, email: '', password: ''})
                    toast.success('Logged in')
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
                                    <button className="btn btn-info" type="submit">Login</button>
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