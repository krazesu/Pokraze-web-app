import styles from './Leaderboard.module.css'

import { useState, useEffect } from 'react'
import { getTopTen } from '../../services/api.service'

function Leaderboard(){
    const [leaderboard, setLeaderboard] = useState([])

    useEffect(() => {
        getTopTen().then(result => {
            setLeaderboard(result)
        });
    }, [])

    useEffect(() => {
        console.log(leaderboard)
    }, [leaderboard])

    if(!leaderboard){
        return null;
    }

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
            {/*Rank 2*/}
            <div className={`${styles.poke_card} ${styles.rank_2}`}>
                <div className={`${styles.rank_badge}  ${styles.rank_2}`}><span>2</span></div>
                <div className={`${styles.sprite}`}>
                    <img 
                        src = {`${leaderboard[1]?.data.sprites.other["official-artwork"]?.front_default ||
                                    leaderboard[1]?.data.sprites.front_default}`}
                        alt = {leaderboard[1]?.data.name}
                    />
                </div>
                <div className={`${styles.poke_name}`}>
                    {leaderboard[1]?.data.name.charAt(0).toUpperCase() + leaderboard[1]?.data.name.slice(1)}
                </div>
                <div className={`${styles.poke_types}`}>
                    { 
                        leaderboard[1]?.data.types.map((types) => {
                            return (<span 
                                    className={`${styles.type_badge} ${styles[types.type.name.toLowerCase()]}`} 
                                    key = {types.type.name}>
                                    {types.type.name}
                                </span>)
                        })
                    }
                </div>
                <div className={`${styles.search_count} ${styles.strong}`}>
                        <strong>{leaderboard[1]?.searchCount}</strong>
                        <br/>searches
                </div>
                <div className={`${styles.bar_count}`}></div>
            </div>

            {/*Rank 1*/}
            <div className={`${styles.poke_card} ${styles.rank_1}`}>
                <div className={`${styles.rank_badge}  ${styles.rank_1}`}><span>1</span></div>
                <div className={`${styles.sprite}`}>
                    <img 
                        src = {`${leaderboard[0]?.data.sprites.other["official-artwork"]?.front_default ||
                                    leaderboard[0]?.data.sprites.front_default}`}
                        alt = {leaderboard[0]?.data.name}
                    />
                </div>
                <div className={`${styles.poke_name}`}>
                    {leaderboard[0]?.data.name.charAt(0).toUpperCase() + leaderboard[0]?.data.name.slice(1)}
                </div>
                <div className={`${styles.poke_types}`}>
                    { 
                        leaderboard[0]?.data.types.map((types) => {
                            return (<span 
                                    className={`${styles.type_badge} ${styles[types.type.name.toLowerCase()]}`} 
                                    key = {types.type.name}>
                                    {types.type.name}
                                </span>)
                        })
                    }
                </div>
                <div className={`${styles.search_count} ${styles.strong}`}>
                        <strong>{leaderboard[0]?.searchCount}</strong>
                        <br/>searches
                </div>
                <div className={`${styles.bar_count}`}></div>
            </div>
            
            {/*Rank 3*/}
            <div className={`${styles.poke_card} ${styles.rank_3}`}>
                <div className={`${styles.rank_badge}  ${styles.rank_3}`}><span>3</span></div>
                <div className={`${styles.sprite}`}>
                    <img 
                        src = {`${leaderboard[2]?.data.sprites.other["official-artwork"]?.front_default ||
                                    leaderboard[2]?.data.sprites.front_default}`}
                        alt = {leaderboard[2]?.data.name}
                    />
                </div>
                <div className={`${styles.poke_name}`}>
                    {leaderboard[2]?.data.name.charAt(0).toUpperCase() + leaderboard[2]?.data.name.slice(1)}
                </div>
                <div className={`${styles.poke_types}`}>
                    { 
                        leaderboard[2]?.data.types.map((types) => {
                            return (<span 
                                    className={`${styles.type_badge} ${styles[types.type.name.toLowerCase()]}`} 
                                    key = {types.type.name}>
                                    {types.type.name}
                                </span>)
                        })
                    }
                </div>
                
                <div className={`${styles.search_count} ${styles.strong}`}>
                        <strong>{leaderboard[2]?.searchCount}</strong>
                        <br/>searches
                </div>
                <div className={`${styles.bar_count}`}></div>
            </div>
        </div>
        </>
    )
}

export default Leaderboard