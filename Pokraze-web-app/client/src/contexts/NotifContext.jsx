import {createContext, useEffect, useState, useRef} from 'react'
import NotifToast from '../components/Notification/NotifToast.jsx';

export const NotifContext = createContext()

export const NotifProvider = ({children}) => {
    const [notify, setNotify] = useState(false)
    const [notification, setNotification] = useState("")
    const timerRef = useRef(null)

    const showNotification = (message, duration = 2000) => {
        setNotification(message)
        setNotify(true)

        if(timerRef.current){
            clearTimeout(timerRef.current)
        }

        timerRef.current = setTimeout(() => {
            setNotify(false)
        }, duration)
    }

    return (
        <NotifContext.Provider
            value ={{
                notify,
                setNotify,
                notification,
                setNotification,
                showNotification
            }}
        >
            {children}

            {notify && <NotifToast notification={notification}/>}
        </NotifContext.Provider>
    )
}