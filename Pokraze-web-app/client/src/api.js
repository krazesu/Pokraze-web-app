const API_BASE = import.meta.env.VITE_API_URL

export const searchPokemon = async (query) => {
    const res = await fetch(`${API_BASE}/pokemons/search/${query}`)
    if (!res.ok) throw new Error("Pokemon not found");
    
    const data = await res.json()

    return { 
        pokemon: data.pokemon, 
        description: data.description
    }
}

export const checkUsername = async (username) => {
    const res = await fetch(`${API_BASE}/trainers/check-username/${username}`)
    if (!res.ok) throw new Error("Error in checking username availability");

    const data = await res.json()

    return data.available
}

export const addTrainer = async (trainer) => {
    const res = await fetch(`${API_BASE}/trainers/register-trainer`, {
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