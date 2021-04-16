const { API } = require('../utils/common')

exports.create = (categoryInfo) => {
    return fetch(`${API}/category`, {
        method: 'POST',
        body: categoryInfo
    }).then(res => res.json())
}

exports.list = () => {
    return fetch(`${API}/categories`)
        .then(res => res.json())
}

exports.remove = (slug) => {
    return fetch(`${API}/category/${slug}`, {
        method: 'DELETE'
    }).then(res => res.json())
}

exports.update = (categoryInfo, slug) => {
    return fetch(`${API}/category/${slug}`, {
        method: 'PUT',
        body: categoryInfo
    }).then(res => res.json())
}