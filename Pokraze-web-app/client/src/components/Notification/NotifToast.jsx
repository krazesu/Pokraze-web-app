import { useState, useEffect } from 'react'
import styles from './NotifToast.module.css'

function NotifToast({notification}){
    const [show, setShow] = useState(true)

    useEffect(() => {
        setShow(true);
        const timer = setTimeout(() => setShow(false), 150);

        return () => clearTimeout(timer);
    }, [])

    return(
        <div 
            className={show? 
                    `${styles.toast} ${styles.show}`: 
                    `${styles.toast} ${styles.fade_out}`
                } 
            id="toast">
            <span>{notification}</span>
        </div>
    )
}

export default NotifToast