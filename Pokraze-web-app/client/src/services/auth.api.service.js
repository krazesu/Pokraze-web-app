const API_BASE = import.meta.env.VITE_API_URL

export const addTrainer = async (trainer) => {
    const res = await fetch(`${API_BASE}/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(trainer)
    })

    const data = await res.json()
    return data
}

export const loginTrainer = async (username, password) => {
    const res = await fetch(`${API_BASE}/auth/login`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username, password})
    })

    const data = await res.json()
    return data
}

export const logoutTrainer = async() => {
    const res = await fetch(`${API_BASE}/auth/logout`, {
        method: "POST",
        credentials: "include",
    })

    const data = await res.json()
    return data
}

export const authTrainer = async() => {
    const res = await fetch(`${API_BASE}/auth/me`, {
       credentials: "include",
    })

    const data = await res.json()
    return data
}