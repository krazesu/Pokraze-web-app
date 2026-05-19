import styles from './Leaderboard.module.css'

function Leaderboard(){
    return(
        <>
        <div className={`${styles.hero}`}>
            <div style={{padding: "2rem", flex: "1"}}>
                <div className={`${styles.eyebrow}`}> 
                    <span>Most Searched Pokémon</span>
                </div>
                <div className={`${styles.title}`}> 
                    <h2>Top <span style={{color: "#E24B4A"}}>'10'</span> searches. </h2>
                </div>
                <div className={`${styles.sub}`}> 
                    <span>The most searched Pokémon by Pokráze trainers — ranked by total search count.</span>
                </div>
            </div>
        </div>

        <div className={`${styles.podium}`}>
            <div className={`${styles.rank_2}`}>
                <div className={`${styles.rank_badge}`}></div>
                <div className={`${styles.sprite}`}></div>
                <div className={`${styles.poke_name}`}></div>
                <div className={`${styles.poke_types}`}></div>
                <div className={`${styles.search_count}`}></div>
                <div className={`${styles.bar_count}`}></div>
            </div>
            <div className={`${styles.rank_1}`}>
            </div>
            <div className={`${styles.rank_3}`}>
            </div>
        </div>
        </>
    )
}

export default Leaderboard