import styles from './Leaderboard.module.css'

function PodiumCard({pokemon, rank}){

    return(
        <div className={`${styles.poke_card} ${styles[rank]}`}>
            <div className={`${styles.rank_badge}  ${styles[rank]}`}><span>2</span></div>
            <div className={`${styles.sprite}`}>
                <img 
                    src = {`${pokemon?.data.sprites.other["official-artwork"]?.front_default ||
                                pokemon?.data.sprites.front_default}`}
                    alt = {pokemon?.data.name}
                />
            </div>
            <div className={`${styles.poke_name}`}>
                {pokemon?.data.name.charAt(0).toUpperCase() + pokemon?.data.name.slice(1)}
            </div>
            <div className={`${styles.poke_types}`}>
                { 
                    pokemon?.data.types.map((types) => {
                        return (<span 
                                className={`${styles.type_badge} ${styles[types.type.name.toLowerCase()]}`} 
                                key = {types.type.name}>
                                {types.type.name}
                            </span>)
                    })
                }
            </div>
            <div className={`${styles.search_count} ${styles.strong}`}>
                    <strong>{pokemon?.searchCount}</strong>
                    <br/>searches
            </div>
            <div className={`${styles.bar_count}`}></div>
        </div>
    )
}

export default PodiumCard