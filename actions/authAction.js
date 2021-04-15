import { API } from '../utils/common'
import cookie from 'js-cookie'


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

export const logout = (next) => {
    removeCookie('token')
    removeLocalStorage('user')
    next()
    
    return fetch(`${API}/logout`)
        .then(res => res.json())
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

// set cookie
export const setCookie = (key, value) => {
    if (process.browser) {
        cookie.set(key, value, {expires: 1})
    }
}

export const removeCookie = (key) => {
    if (process.browser) {
        cookie.remove(key, {expires: 1})
    }
}

export const getCookie = (key) => {
    if (process.browser) {
        return cookie.get(key)
    }
}

export const setLocalStorage = (key, value) => {
    if (process.browser) {
        localStorage.setItem(key, JSON.stringify(value))
    }
}

export const removeLocalStorage = (key) => {
    if (process.browser) {
        localStorage.clear(key)
    }
}

export const authenticate = (data, next) => {
    setCookie('token', data.token)
    setLocalStorage('user', data.user)
    next()
}

export const isAuth = () => {
    if (process.browser) {
        const cookieChecked = getCookie('token')
        if (cookieChecked) {
            if (localStorage.getItem('user')) {
                return JSON.parse(localStorage.getItem('user'))
            } else {
                return false
            }
        }
    }
}