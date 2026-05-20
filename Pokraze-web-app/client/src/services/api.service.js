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
    const res = await fetch(`${API_BASE}/trainers/profile`, {
        credentials: "include"
    })

    if(!res.ok){
        throw new Error("Login failed")
    }
    
    return res.json()
}

export const addToTeam = async(pokemonId, pokemonName) => {

    const res = await fetch(`${API_BASE}/trainers/addToTeam`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({"pokemonId": pokemonId, "name": pokemonName})
    })
    
    if(!res.ok){
        throw new Error("Failed to add to team!")
    }
    
    return res.json()
}

export const getTeam = async() => {
    
    const res = await fetch(`${API_BASE}/trainers/getTeam`, {
        method: "POST",
        credentials: "include"
    })

    if(!res.ok){
        throw new Error("Failed to get team!")
    }

    return res.json()
}

export const removeFromTeam = async(pokemonName) => {

    const res = await fetch(`${API_BASE}/trainers/removeFromTeam`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({"name" : pokemonName})
    })

    if(!res.ok){
        throw new Error("Failed to remove pokemon from team!")
    }

    return res.json()
}

export const addToFavorites = async(pokemonId, pokemonName) => {
    
    const res = await fetch(`${API_BASE}/trainers/addToFavorites`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({"pokemonId": pokemonId, "name": pokemonName})
    })

    if(!res.ok){
        throw new Error("Failed to add pokemon to favorites!")
    }

    return res.json()
}

export const removeFromFavorites = async(pokemonId, pokemonName) => {
    const res = await fetch(`${API_BASE}/trainers/removeFromFavorites`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({"pokemonId": pokemonId, "name": pokemonName})
    })

    if(!res.ok){
        throw new Error("Failed to remove pokemon to favorites!")
    }

    return res.json()
}