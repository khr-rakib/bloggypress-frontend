import Link from "next/link"
import Layout from "../../components/Layout"
import Admin from "../../components/secure/Admin"

const AdminIndex = () => {
    return (
        <Layout title="Admin Dashboard">
            <Admin>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="list-group">
                                <Link href="/admin/manage/categories"><a class="list-group-item list-group-item-action">Manage Categories</a></Link>
                                
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="card">
                                <div className="card-body">
                                    <h2>Admin Dashboard</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Admin>
        </Layout>
    )
}

export default AdminIndex