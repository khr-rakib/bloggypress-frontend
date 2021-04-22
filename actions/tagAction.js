const { API } = require('../utils/common')

exports.create = (name) => {
    return fetch(`${API}/tag`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(name)
    }).then(res => res.json())
}

exports.list = () => {
    return fetch(`${API}/tags`)
        .then(res => res.json())
}

exports.remove = (slug) => {
    return fetch(`${API}/tag/${slug}`, {
        method: 'DELETE'
    }).then(res => res.json())
}
