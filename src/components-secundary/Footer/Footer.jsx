import React from 'react'
import './Footer.css'
import { Facebook, Whatsapp, GeoAlt, TelephoneFill, Tiktok } from 'react-bootstrap-icons';


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__section'>
                <b >
                    <a className='s' href="https://maps.app.goo.gl/iaCtcw4Khom48apSA" target="_blank" rel="noopener noreferrer">
                        <div className='footer__link'><GeoAlt color="red" size={24} />Jr. Los libertadores S/N, Ref: 2 cuadras antes de iglesia la cosecha</div>
                    </a>
                </b>
            </div>
            <div className='footer__section'>
                <b>
                    <a className='s' href="https://www.facebook.com/profile.php?id=61556014966143&is_tour_completed=true" target="_blank" rel="noopener noreferrer">
                        <div className='footer__link'><Facebook color="blue" size={24} />Fisioterapia Figueroa</div>
                    </a>
                </b>
                <b>
                    <a className='s' href="https://www.tiktok.com/@fisiogot.apuntes/video/7324539189121355013?q=Fisioterapia%20&t=1707702727551" target="_blank" rel="noopener noreferrer">
                        <div className='footer__link'><Tiktok color="white" size={24} /> @FisioterapiaFigueroa</div>
                    </a>
                </b>
            </div>

            <div className='footer__section'>
                <b>
                    <a href="tel:+51968380172">
                        <div className='footer__link'><TelephoneFill color="green" size={24} /> 968 380 172</div>
                    </a>

                </b>
                <b>
                    <a href="https://api.whatsapp.com/send?phone=51968380172&text=https://fisioterapia-figueroa.netlify.app/%0AHola,%20estoy%20interesado%20deseo%20obtener%20más%20información%20" target="_blank" rel="noopener noreferrer">
                        <div className='footer__link'><Whatsapp color="green" size={24} />Contactanos</div>
                    </a>
                </b>
            </div>
        </div>
    )
}

export default Footer