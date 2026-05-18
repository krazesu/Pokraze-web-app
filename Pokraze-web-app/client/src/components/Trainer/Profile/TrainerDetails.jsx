import styles from './TrainerProfile.module.css'

import { useState, useContext, useEffect} from "react"
import { AuthContext } from "../../../contexts/AuthContext";

function TrainerDetails(){
    const {user, loading, logout} = useContext(AuthContext);

    return(
        <div className={`${styles.card}`}>
            <div className={`${styles.card_label}`}>
                🧢 TRAINER DETAILS
            </div>

            <div className={`${styles.info_row}`}>
                <span className={`${styles.info_key}`}>
                    Full Name
                </span>
                <span  className={`${styles.info_val}`}>
                    {`${user.name}`}
                </span>
            </div>
            <div className={`${styles.info_row}`}>
                <span className={`${styles.info_key}`}>
                    Username
                </span>
                <span  className={`${styles.info_val} ${styles.accent}`}>
                    {`${user.username}`}
                </span>
            </div>
            <div className={`${styles.info_row}`}>
                <span className={`${styles.info_key}`}>
                    Age
                </span>
                <span  className={`${styles.info_val}`}>
                    {`${user.age}`}
                </span>
            </div>
            <div className={`${styles.info_row}`}>
                <span className={`${styles.info_key}`}>
                    Home Region
                </span>
                <span  className={`${styles.info_val}`}>
                    {`${user.region}`}
                </span>
            </div>
            <div className={`${styles.info_row}`}>
                <span className={`${styles.info_key}`}>
                    Joined
                </span>
                <span  className={`${styles.info_val}`}>
                    &nbsp;{`${new Date(user.joinDate).toLocaleString("en-US", {month: "short",})}`} 
                    &nbsp;{`${new Date(user.joinDate).getFullYear()}`}
                </span>
            </div>
        </div>
    );
}

export default TrainerDetails