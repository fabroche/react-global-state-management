import {createContext, ReactNode, useState} from "react";


interface NotificationContexType {
    message: string | null;
    showNotification: (msg: string) => void;
    hiddeNotification: () => void;
}

interface NotificationProviderProps {
    children: ReactNode;
}

const NotificationContext = createContext<NotificationContexType | undefined>(undefined)

const NotificationProvider: React.FC<NotificationProviderProps> = ({children}) => {
    const [message, setMessage] = useState<string | null>(null)

    function hiddeNotification() {
        setMessage(null)
    }

    function showNotification(msg: string) {
        setMessage(msg)
        setTimeout(() => {
            hiddeNotification();
        }, 3000)
    }

    return (
        <NotificationContext.Provider value={{
            message,
            hiddeNotification,
            showNotification
        }}>
            {children}
        </NotificationContext.Provider>
    )

}

export {NotificationContext, NotificationProvider}