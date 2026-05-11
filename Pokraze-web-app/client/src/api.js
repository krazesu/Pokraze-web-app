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
    if (!res.ok) throw new Error("Pokemon not found");

    const data = await res.json()

    return data.available
}