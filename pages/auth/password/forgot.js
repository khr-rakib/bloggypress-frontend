import { useRouter } from 'next/router'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { forgot } from '../../../actions/authAction'
import Layout from '../../../components/Layout'
import Loading from '../../../components/Loading'

const Forgot = () => {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const handleSubmit = e => {
        e.preventDefault()
        setLoading(true)
        forgot({email})
            .then(data => {
                if (data.error) {
                    toast.error(data.error)
                    setLoading(false)
                } else {
                    setEmail('')
                    setLoading(false)
                    toast.success(data.message)
                    router.push('/')
                }
            })
    }
    return (
        <Layout title="Forgot Password">
            <div className="container">
                <div className="row">
                    <div className="col-md-12" style={{background: '#eee', padding: '50px'}}>
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label>Email address</label>
                                        <input type="email" onChange={e => setEmail(e.target.value)} value={email} className="form-control" />
                                    </div>
                                    <button className="btn btn-info" type="submit">Submit { loading && <Loading /> }</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Forgot
