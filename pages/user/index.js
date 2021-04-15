import Layout from "../../components/Layout"
import User from '../../components/secure/User'

const UserIndex = () => {
    return (
        <Layout title="User Dashboard">
            <User>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <h2>User Dashboard</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </User>
        </Layout>
    )
}

export default UserIndex