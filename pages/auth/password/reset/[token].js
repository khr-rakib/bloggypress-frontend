import { useState } from 'react'
import Layout from '../../../../components/Layout'
import Loading from '../../../../components/Loading'
import { useRouter } from 'next/router'
import { reset } from '../../../../actions/authAction'
import { toast } from 'react-toastify'

const Reset = () => {
    const router = useRouter()
    const [newPassword, setNewPassword] = useState('')    
    const [loading, setLoading] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        setLoading(true)
        reset({ newPassword, resetPasswordLink: router.query.token })
            .then(data => {
                if (data.error) {
                    setLoading(false)
                    return toast.error(data.error)
                } else {
                    toast.success(data.message)
                    setNewPassword('')
                    setLoading(false)
                    router.push('/login')
                }
            })
    }

    return (
        <Layout title="Reset password">
            <div className="container">
                <div className="row">
                    <div className="col-md-12" style={{background: '#eee', padding: '50px'}}>
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label>New Password</label>
                                        <input type="password" onChange={e => setNewPassword(e.target.value)} value={newPassword} className="form-control" />
                                    </div>
                                    <button className="btn btn-info" type="submit">Reset {loading && <Loading />}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Reset