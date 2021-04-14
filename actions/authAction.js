import { API } from '../utils/common'


export const preRegister = (name, email, password) => {
    return fetch(`${API}/pre-register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email, password})
    }).then(res => res.json())    
}


export const login = (email, password) => {
    return fetch(`${API}/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    }).then(res => res.json())    
}