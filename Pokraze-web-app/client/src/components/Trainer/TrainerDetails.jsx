
import { useState, useContext, useEffect} from "react"
import { AuthContext } from "../../contexts/AuthContext";

function TrainerDetails(){
    const {user, loading, logout} = useContext(AuthContext);

    return(
        <div className="card">
            <div className="card-label">
                🧢 TRAINER DETAILS
            </div>

            <div className="info-row">
                <span className="info-key">
                    Full Name
                </span>
                <span  className="info-val">
                    {`${user.name}`}
                </span>
            </div>
            <div className="info-row">
                <span className="info-key">
                    Username
                </span>
                <span  className="info-val accent">
                    {`${user.username}`}
                </span>
            </div>
            <div className="info-row">
                <span className="info-key">
                    Age
                </span>
                <span  className="info-val">
                    {`${user.age}`}
                </span>
            </div>
            <div className="info-row">
                <span className="info-key">
                    Home Region
                </span>
                <span  className="info-val">
                    {`${user.region}`}
                </span>
            </div>
            <div className="info-row">
                <span className="info-key">
                    Joined
                </span>
                <span  className="info-val">
                    &nbsp;{`${new Date(user.joinDate).toLocaleString("en-US", {month: "short",})}`} 
                    &nbsp;{`${new Date(user.joinDate).getFullYear()}`}
                </span>
            </div>
        </div>
    );
}

export default TrainerDetails