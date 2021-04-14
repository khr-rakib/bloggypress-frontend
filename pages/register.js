import { useState } from "react"
import { toast } from "react-toastify"
import { preRegister } from "../actions/authAction"
import Layout from "../components/Layout"

const Register = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })
    
    const { name, email, password } = values
    
    const handleChange = e => {
        setValues({...values, [e.target.name]: e.target.value })
    }
    const handleSubmit = e => {
        e.preventDefault()
        preRegister(name, email, password)
            .then(data => {
                if (data.error) {
                    setValues({...values, password: ''})
                    return toast.error(data.error)
                } else {
                    setValues({...values, name: '', email: '', password: ''})
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
                                    <button className="btn btn-info" type="submit">Register</button>
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