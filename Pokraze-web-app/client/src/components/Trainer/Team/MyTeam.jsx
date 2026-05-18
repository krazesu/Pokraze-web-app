import { useContext } from "react"
import styles from './MyTeam.module.css'
import { AuthContext } from "../../../contexts/AuthContext";

function MyTeam(){
    const {user, loading} = useContext(AuthContext);

    async function removePokemon(params) {
        return
    }

    return(
        <>
        <div className={`${styles.header}`}>
            <h2>MY TEAM</h2>
            <span className={`${styles.team_count}`}></span>
        </div>
        <div className={`${styles.grid}`} id={`${styles.grid_id}`}>
            {user.team.map((pokemon) => {
                return (
                    <div className={`${styles.slot}`} key = {pokemon}>
                        <button
                            className={`${styles.slot}`}
                            title = {'Remove'}
                            onClick={removePokemon}>
                            ✕
                        </button>
                        <img 
                            className={`${styles.poke_sprite}`}
                        />
                        <div className={`${styles.poke_name}`}>{`${pokemon}`}</div>
                        <div className={`${styles.poke_id}`}></div>
                    </div>
                );
            })}
        </div>
        </>
    );
}

export default MyTeam;