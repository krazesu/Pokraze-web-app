import { useState, useEffect } from 'react'
import styles from './NotifToast.module.css'

function NotifToast({notification, type}){
    const [show, setShow] = useState(true)

    useEffect(() => {
        setShow(true);
        const timer = setTimeout(() => setShow(false), 150);

        return () => clearTimeout(timer);
    }, [])

    return(
        <div
            className={`${styles.toast} 
            ${show ? styles.show : styles.fade_out} ${type ? styles[type] : ""}`}
            id="toast"
        >
            <span>{notification}</span>
        </div>
    )
}

export default NotifToast