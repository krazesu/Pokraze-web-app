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

export const getTopTen = async() => {
    const res = await fetch(`${API_BASE}/pokemons/topTen`)

    if (!res.ok) throw new Error("Pokemon not found");
    
    const data = await res.json()

    return data
}

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

export const addToTeam = async(pokemonName) => {
    const token = localStorage.getItem("token");

    const res = await fetch(`${API_BASE}/trainers/addToTeam`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({pokemonName, pokemonName})
    })

    
    if(!res.ok){
        throw new Error("Failed to add to team!")
    }
    
    return res.json()
}

export const getTeam = async() => {
    const token = localStorage.getItem("token");

    const res = await fetch(`${API_BASE}/trainers/getTeam`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    
    if(!res.ok){
        throw new Error("Failed to get team!")
    }

    return res.json()
}

export const removeFromTeam = async(pokemonName) => {
    const token = localStorage.getItem("token");

    const res = await fetch(`${API_BASE}/trainers/removeFromTeam`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({"name" : pokemonName})
    })
    
    if(!res.ok){
        throw new Error("Failed to pokemon from team!")
    }

    return res.json()
}