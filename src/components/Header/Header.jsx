import React, { useState } from 'react'
import './Header.css'
import userDefault from '../../image/user_img.avif'
import logo from '../../image/logo_lf.png'

import { useAuth0 } from '@auth0/auth0-react'
import CantidadMensajes from './CantidadMensajes'
import { Link } from 'react-router-dom'

const Header = ({ isOpen, setIsOpen }) => {

    const { loginWithRedirect, isAuthenticated, isLoading, logout, user } = useAuth0();





    return (
        <nav className='nav'>
            <Link to='/'>
                <div className='nav__logo'>
                    <img src={logo} alt="" />
                    <p>FISIOTERAPIA FIGUEROA</p>

                    <div className={`nav_toogle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                </div>
            </Link>

            <div className={`nav__links ${isOpen && "open__menu"}`} onClick={() => setIsOpen(false)} >
                <li> <Link to='/'>Inicio</Link> </li>
                <li> <Link to='/sobre-nosotros'>Sobre nosotros</Link> </li>
                <li> <Link to='/contactos'>Contáctanos</Link> </li>

                {/* <li> <Link to='/'>Carta</Link> </li> */}
                {/* <li> <Link to='/'>Reserva</Link> </li> */}


                {/* {

                    isAuthenticated ?
                        <li id='mensajes'>  <Link to='/mensaje'> <CantidadMensajes /></Link> <Link to='/mensaje'> Mensaje</Link> </li>
                        :
                        ''

                } */}

                {

                    // isAuthenticated === 'areyesf20_2@unc.edu.pe'?
                    user?.email === 'areyesf20_2@unc.edu.pe'
                        || user?.email === 'magdalenafigueroazambrano@gmail.com'
                        ?
                        <li id='mensajes'>  <Link to='/mensaje'> <CantidadMensajes /></Link> <Link to='/mensaje'> Mensaje</Link> </li>
                        :
                        ''
                }


            </div>

            <div className='nav__user'>
                <div className='nav__user-datos ocultar'>

                    {
                        isLoading ?
                            <p>Cargando...</p>
                            :
                            isAuthenticated ?
                                <p> {user.email} </p>
                                :
                                <p>Sin usuario</p>

                    }

                    {
                        isAuthenticated ?
                            <button onClick={() => logout()}>
                                salir
                            </button>
                            :


                            <button className='btn_inicioSecion' onClick={() => loginWithRedirect()}>
                                Registrate
                            </button>


                    }

                </div>

                {
                    isLoading ?
                        <p>cargando...</p>
                        :

                        isAuthenticated ?
                            <img className='ocultar' src={user?.picture} alt={user.name} />
                            :
                            <img className='ocultar' src={userDefault} alt="" />

                }


            </div>
        </nav>
    )
}

export default Header