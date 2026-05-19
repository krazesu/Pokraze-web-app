import styles from './Leaderboard.module.css'

function ListCard({pokemon, rank}){
    return(
        <div className={`${styles.list_item}`}>
            <div className={`${styles.list_rank}`}>#{rank}</div>
            <div className={`${styles.list_sprite}`}>
                <img
                    src = {`${pokemon?.data.sprites.other["official-artwork"]?.front_default ||
                        pokemon?.data.sprites.front_default}`}
                />
            </div>
            <div className={`${styles.list_info}`}>
                <div className={`${styles.list_name}`}>
                    {pokemon?.data.name.charAt(0).toUpperCase() + pokemon?.data.name.slice(1)}
                </div>
                <div className={`${styles.list_types}`}>
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
            </div>
            <div className={`${styles.list_count}`}>
                <strong>{pokemon?.searchCount}</strong>
                <span>searches</span>
            </div>
        </div>
    )
}

export default ListCard