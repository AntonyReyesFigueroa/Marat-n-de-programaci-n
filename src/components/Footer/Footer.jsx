import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
           <div className='footer__section'>
           <b >
                <a className='s' href="https://maps.app.goo.gl/3ykT51E4KRyd9J5H7" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-map-marker-alt"></i> Jr. Los libertadores S/N, Ref: 2 cuadras antes de iglesia la cosecha
                </a>
            </b>
           </div>
            <div className='footer__section'>
                <b>
                    <a className='s' href="https://www.facebook.com/merejo.escobal" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i> Fisioterapia Figueroa
                    </a>
                </b>
                <b>
                    <a className='s' href="https://www.tiktok.com/@lostronkitos.namora?_t=8dfBW3lkWBy&_r=1" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-tiktok"></i> @Fisioterapia Figueroa
                    </a>
                </b>
            </div>

            <div className='footer__section'>
                <b>
                    <a href="tel:+51918320136"><i className="fas fa-phone"></i> 918 320 136</a>

                </b>
                <b>
                    <a href="https://api.whatsapp.com/send?phone=51918320136" target="_blank" rel="noopener noreferrer"> <i className="fab fa-whatsapp"></i> 918320136</a>
                </b>
            </div>
        </div>
    )
}

export default Footer