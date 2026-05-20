import {createContext, useEffect, useState} from 'react'

export const NotifContext = createContext()

export const NotifProvider = ({children}) => {
    const [notify, setNotify] = useState(false)
    const [notification, setNotification] = useState("")

    return (
        <NotifContext.Provider
            value ={{
                notify,
                setNotify,
                notification,
                setNotification
            }}
        >
            {children}
        </NotifContext.Provider>
    )
}