export const toPokemonSlug = (name) => {
    return name
        .trim()
        .toLowerCase()
        .replace(/\./g, '')      // remove dots (mr. → mr)
        .replace(/\s+/g, '-')    // spaces → dashes
}