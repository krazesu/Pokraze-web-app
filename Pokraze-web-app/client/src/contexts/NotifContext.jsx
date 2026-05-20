import {createContext, useEffect, useState, useRef} from 'react'
import NotifToast from '../components/Notification/NotifToast.jsx';

export const NotifContext = createContext()

export const NotifProvider = ({children}) => {
    const [notify, setNotify] = useState(false)
    const [notification, setNotification] = useState("")
    const [type, setType] = useState(false)
    const timerRef = useRef(null)

    const showNotification = (message, type, duration = 1500) => {
        setNotification(message)
        setType(type)
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

            {<NotifToast notification={notification} show={notify} type={type}/>}
        </NotifContext.Provider>
    )
}