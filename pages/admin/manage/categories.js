import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import { create, list, photo, remove, update } from "../../../actions/categoryAction"
import Layout from "../../../components/Layout"
import Admin from "../../../components/secure/Admin"
import { API } from "../../../utils/common"


const Categories = () => {
    const [reload, setReload] = useState(false)
    const [swapForm, setSwapForm] = useState(true)
    const [categories, setCategories] = useState([])    
    const [values, setValues] = useState({
        name: '',
        formData: '',
        updateSlug: ''
    })
    const { name, formData, updateSlug } = values

    useEffect(() => {
        fetchAllCategory()
        setValues({...values, formData: new FormData()})
    }, [reload])

    const fetchAllCategory = () => {
        list()
            .then(data => {
                if (data.error) {
                    return toast.error(data.error)
                }
                setCategories(data)
            })
    }

    const handleChange = name => e => {
        const value = name === 'photo' ? e.target.files[0] : e.target.value
        formData.set(name, value)
        setValues({ ...values, [name]: value, formData: formData })        
    }

    const handleSubmit = e => {
        e.preventDefault()
        create(formData)
            .then(data => {
                if (data.error) {
                    return toast.error(data.error)
                }
                setValues({ ...values, name: '' })
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

    

    const handleEditForm = () => {
        return (
            <form onSubmit={handleUpdate}>
                <div className="form-group">
                    <label>Category Name</label>
                    <input type="text" onChange={handleChange('name')} value={name} className="form-control" placeholder="type category name..." required />
                </div>
                <div className="form-group">
                    <label>Category Image
                        <input type="file" onChange={handleChange('photo')} className="form-control" hidden />
                    </label>
                </div>
                <button className="btn btn-warning">Update</button>
            </form>
        )
    }

    const handleEdit = slug => {
        setSwapForm(false)
        let data = categories.find(c => c.slug === slug)
        setValues({ ...values, name: data.name, updateSlug: slug })
        handleEditForm()
    }

    const categoryInsertForm = () => {
        return (
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Category Name</label>
                    <input type="text" onChange={handleChange('name')} value={name} className="form-control" placeholder="type category name..." required />
                </div>
                <div className="form-group">
                    <label>Category Image
                        <input type="file" onChange={handleChange('photo')} className="form-control" hidden />
                    </label>
                </div>
                <button className="btn btn-info">Save</button>
            </form>
        )
    }

    const handleUpdate = e => {
        e.preventDefault()
        update(formData, updateSlug)
            .then(data => {
                if (data.error) {
                    toast.error(data.error)
                }
                setSwapForm(true)
                setValues({...values, name: ''})
                toast.success(data.message)
                setReload(!reload)
            })
    }

    return (
        <Layout>
            <Admin>
                <div className="container" style={{background: '#eee', padding: '50px 20px'}}>
                    <div className="row">
                        <div className="col-md-6">
                            {swapForm ? categoryInsertForm() : handleEditForm()}
                        </div>
                        <div className="col-md-6">
                            <table className="table">
                                <thead>                                    
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Photo</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categories && categories.map((c, i) => (
                                        <tr key={i}>
                                            <th scope="row">{i + 1}</th>
                                            <td>{c.name}</td>
                                            <td><img src={`${API}/category/photo/${c.slug}` } width="40" alt=""/></td>
                                            <td>
                                                <button onClick={() => handleEdit(c.slug)}>✏</button>
                                                <button onClick={() => handleDelete(c.slug)}>❌</button>
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

export default Categories