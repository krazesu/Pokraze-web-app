const API_BASE = import.meta.env.VITE_API_URL

import { toPokemonSlug } from "../utils/pokemon.utils.js";

export const searchPokemon = async (query) => {

    query = toPokemonSlug(query)

    const res = await fetch(
        `${API_BASE}/pokemons?name=${encodeURIComponent(query)}`
    )

    if (!res.ok) throw new Error("Pokemon not found");
    
    const data = await res.json()

    return { 
        pokemon: data.pokemon, 
        description: data.description
    }
}

export const getTopTen = async() => {
    const res = await fetch(`${API_BASE}/pokemons/popular`)

    const data = await res.json()
    return data
}

export const checkUsername = async (username) => {
    const res = await fetch(`${API_BASE}/trainers/username/${username}`)

    const data = await res.json()
    return data
}

export const getTrainerProfile = async () => {
    const res = await fetch(`${API_BASE}/trainers/me`, {
        credentials: "include"
    })
    
    const data = await res.json()
    return data
}

export const addToTeam = async(pokemonId, pokemonName) => {

    const res = await fetch(`${API_BASE}/trainers/me/team`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({"pokemonId": pokemonId, "name": pokemonName})
    })
    
    const data = await res.json()
    return data
}

export const getTeam = async() => {
    
    const res = await fetch(`${API_BASE}/trainers/me/team`, {
        credentials: "include"
    })

    const data = await res.json()
    return data
}

export const removeFromTeam = async(pokemonName) => {

    const res = await fetch(`${API_BASE}/trainers/me/team`, {
        method: "DELETE",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({"name" : pokemonName})
    })

    const data = await res.json()
    return data
}

export const addToFavorites = async(pokemonId, pokemonName) => {
    
    const res = await fetch(`${API_BASE}/trainers/me/favorites`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({"pokemonId": pokemonId, "name": pokemonName})
    })

    const data = await res.json()
    return data 
}

export const removeFromFavorites = async(pokemonId, pokemonName) => {
    const res = await fetch(`${API_BASE}/trainers/me/favorites`, {
        method: "DELETE",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({"pokemonId": pokemonId, "name": pokemonName})
    })

    const data = await res.json()
    return data
}