import React from 'react'
import ReactDOM from 'react-dom/client'
import {NavBarLogin} from './NavBar/NavBar'
import { CardLogin } from './CardIniciarSesion/CardIniciarSesion'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <NavBarLogin/>
        <CardLogin/>
    </React.StrictMode>
)


