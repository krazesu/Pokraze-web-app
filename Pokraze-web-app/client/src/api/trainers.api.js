const API_BASE = import.meta.env.VITE_API_URL

export const checkUsername = async (username) => {
    const res = await fetch(`${API_BASE}/trainers/check-username/${username}`)
    if (!res.ok) throw new Error("Error in checking username availability");

    const data = await res.json()

    return data.available
}

export const getTrainerProfile = async () => {
    const token = localStorage.getItem("token");

    const res = await fetch(`${API_BASE}/trainers/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    if(!res.ok){
        throw new Error("Login failed")
    }
    
    return res.json()
}