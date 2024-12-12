import './App.css'
import {NotificationProvider} from "./context/NotificationContext.tsx";
import {NotificationButton} from "./components/NotificationButton.tsx";
import {Notification} from "./components/Notification.tsx";

function App() {


    return (
        <NotificationProvider>
            <h1>💸 Transacción casi lista 💸</h1>
            <p>¿Estás seguro de que deseas completar esta transacción?</p>
            <NotificationButton/>
            <Notification/>
        </NotificationProvider>
    )

}

export default App
