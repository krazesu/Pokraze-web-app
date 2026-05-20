import { useState, useEffect } from 'react'
import styles from './NotifToast.module.css'

function NotifToast({notification, show, type}){
    return(<div
                className={
                    `${styles.toast}
                    ${show ? styles.show : styles.fade_out}
                    ${styles[type]}`}
            >
            <span>{notification}</span>
        </div>
    )
}

export default NotifToast