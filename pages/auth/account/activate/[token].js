import { useState, useEffect } from 'react'
import Layout from '../../../../components/Layout'
import { useRouter } from 'next/router'
import jwt from 'jsonwebtoken'
import {register} from '../../../../actions/authAction'
import { toast } from 'react-toastify'

const Activate = () => {
    const router = useRouter()
    const token = router.query.token

    const handleActivate = () => {
        register({ token })
            .then(data => {
                if (data.error) {
                    return toast.error(data.error)
                } else {
                    router.push('/login')
                }
            })
    }

    return (
        <Layout title="Activate account">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div style={{height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                            <h4>Activate your account by clicking this button</h4>
                            <button onClick={handleActivate} className="btn btn-info">Activate</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Activate