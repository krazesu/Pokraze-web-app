const API_BASE = import.meta.env.VITE_API_URL

export const addTrainer = async (trainer) => {
    const res = await fetch(`${API_BASE}/auth/register-trainer`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(trainer)
    })

    const data = await res.json()

    if (!res.ok) throw new Error("Errorsdasd in adding trainer.");
    alert("Trainer registered")
    return data
}

export const loginTrainer = async (username, password) => {
    const res = await fetch(`${API_BASE}/auth/login-trainer`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username, password})
    })

    if(!res.ok){
        throw new Error("Login failed")
    }

    return res.json()
}
