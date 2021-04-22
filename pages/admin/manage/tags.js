import { toast } from "react-toastify"
import { API } from "../../../utils/common"
import { useState, useEffect } from "react"
import Layout from "../../../components/Layout"
import Admin from "../../../components/secure/Admin"
import { create, list, remove } from "../../../actions/tagAction"

const Tags = () => {
    const [reload, setReload] = useState(false)
    const [swapForm, setSwapForm] = useState(true)
    const [tags, setTags] = useState([])    
    const [name, setName] = useState('')

    useEffect(() => {
        fetchAllTag()
    }, [reload])

    const fetchAllTag = () => {
        list()
            .then(data => {
                if (data.error) {
                    return toast.error(data.error)
                }
                setTags(data)
            })
    }

    const handleSubmit = e => {
        e.preventDefault()
        create({name})
            .then(data => {
                console.log(name)
                if (data.error) {
                    return toast.error(data.error)
                }
                setName('')
                setReload(!reload)
                toast.success(data.message)
            })
    }

    const handleDelete = slug => {
        remove(slug)
            .then(data => {
                if (data.error) {
                    return toast.error(data.error)
                }
                setReload(!reload)
                toast.success(data.message)
            })
    }

    return (
        <Layout>
            <Admin>
                <div className="container" style={{background: '#eee', padding: '50px 20px'}}>
                    <div className="row">
                        <div className="col-md-6">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Tag Name</label>
                                    <input type="text" onChange={e => setName(e.target.value)} value={name} className="form-control" placeholder="type tag name..." required />
                                </div>
                                <button className="btn btn-info">Save</button>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <table className="table">
                                <thead>                                    
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tags && tags.map((t, i) => (
                                        <tr key={i}>
                                            <th scope="row">{i + 1}</th>
                                            <td>{t.name}</td>
                                            <td>
                                                <button onClick={() => handleDelete(t.slug)}>❌</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Admin>
        </Layout>
    )
}

export default Tags