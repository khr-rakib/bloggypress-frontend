import Link from 'next/link'
import { useState } from "react"
import { toast } from "react-toastify"
import { preRegister } from "../actions/authAction"
import Layout from "../components/Layout"
import Loading from "../components/Loading"

const Register = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        loading: false
    })
    
    const { name, email, password, loading } = values
    
    const handleChange = e => {
        setValues({...values, [e.target.name]: e.target.value })
    }
    const handleSubmit = e => {
        e.preventDefault()
        setValues({...values, loading: true})
        preRegister(name, email, password)
            .then(data => {
                if (data.error) {
                    setValues({...values, password: '', loading: false})
                    return toast.error(data.error)
                } else {
                    setValues({...values, name: '', email: '', password: '',loading: false})
                    toast.info(data.message)
                }
            })
    }

    return (
        <Layout title="Register">
            <div className="container">
                <div className="row">
                    <div className="col-md-12" style={{background: '#eee', padding: '50px'}}>
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" className="form-control" value={name} name="name" onChange={handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" className="form-control" value={email} name="email" onChange={handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" value={password} name="password" onChange={handleChange} />
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                        <button className="btn btn-info" type="submit">Register {loading && <Loading />}</button>
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

export default Register