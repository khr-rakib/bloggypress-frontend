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

export const register = (token) => {
    return fetch(`${API}/register`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(token)
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

export const forgot = (email) => {
    return fetch(`${API}/forgot-password`, {
        method: "PUT",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(email)
    }).then(res => res.json())    
}

export const reset = (resetInfo) => {
    return fetch(`${API}/reset-password`, {
        method: "PUT",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(resetInfo)
    }).then(res => res.json())
}