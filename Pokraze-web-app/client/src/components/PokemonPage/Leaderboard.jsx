import styles from './Leaderboard.module.css'

import { useState, useEffect } from 'react'
import { getTopTen } from '../../services/api.service'
import PodiumCard from './PodiumCard'
import ListCard from './ListCard'

function Leaderboard(){
    const [leaderboard, setLeaderboard] = useState([])

    useEffect(() => {
        getTopTen().then(result => {
            setLeaderboard(result)
        });
    }, [])

    if(!leaderboard){
        return null;
    }

    return(
        <div style={{maxWidth: "1300px", width: "100%"}}>
            <div className={`${styles.hero}`}>
                <div style={{padding: "2rem", flex: "1"}}>
                    <div className={`${styles.eyebrow}`}> 
                        <span>MOST SEARCHED POKÉMON</span>
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
                {leaderboard[1] && (
                    <PodiumCard pokemon={leaderboard[1]} rank={"rank_2"} />
                )}

                {leaderboard[0] && (
                    <PodiumCard pokemon={leaderboard[0]} rank={"rank_1"}/>
                )}

                {leaderboard[2] && (
                    <PodiumCard pokemon={leaderboard[2]} rank={"rank_3"}/>
                )}
            </div>

            <div className={`${styles.list}`}>

                {
                    leaderboard
                        .filter((_, index) => index >= 3)
                        .map((pokemon, index) => (
                            <ListCard
                                key={index}
                                pokemon={pokemon}
                                rank={index+4}
                            />
                        ))
                }
            </div>
        </div>
    )
}

export default Leaderboard