import React, { useState } from 'react'
import './Home.css'
import img1 from '../../../image/lesion_brazo.png'
import img2 from '../../../image/dolor_espalda.png'
import img3 from '../../../image/dolor_barriga.jpg'
import img4 from '../../../image/bebe.png'
import img5 from '../../../image/madres_gestando.png'
import img6 from '../../../image/prevencion.png'
import { Facebook } from 'react-bootstrap-icons';

const Home = () => {

  const [modalPubli, setModalPubli] = useState(true)
  return (
    <div className='container__home'>

      <div className='publicidad_gym' style={{ display: `${modalPubli ? 'flex' : 'none'}` }}>
        <h3 onClick={() => setModalPubli(false)}>x</h3>
        <div href="https://www.facebook.com/p/Matarazzo-GYM-100069397291625/" target="_blank" rel="noopener noreferrer" >
          <div className="container_publicidad">
            <h1>Matarazzo GYM </h1>
            <p>¡Cuida tu salud y alcanza tus metas fitness en Matarazzo!
              Equipos modernos y entrenadores expertos. ¡Únete hoy!
            </p>
            <p> Horario de atención: De Lunes a Sabadado 5:00am - 9:00pm</p>
            <b>
              <a className='s' href="https://www.facebook.com/p/Matarazzo-GYM-100069397291625/" target="_blank" rel="noopener noreferrer">
                <div className='footer__link'><Facebook color="blue" size={24} />Matarazzo GYM </div>
              </a>
            </b>
          </div>
        </div>
      </div>

      <div className="home__title">
        <h1>FISIOTERAPIA FIGUEROA</h1>
      </div>

      <div className="main__home">
        <div className="main__time__home">
          <h2>Tipos de tratamientos</h2>
        </div>
        <div className="main__article__container_container">
          <div className="main__article__container">
            <article className="article">
              <div className="article_title">Lesiones </div>
              <img src={img1} alt="Lesion de brazo" />
              <div className="article_content">
                Tratamientos especializados con enfoques terapéuticos
                específicos en lesiones de Hombros, brazos, y piernas
              </div>
            </article>
            <article className="article">
              <div className="article_title">Dolor de Espalda </div>
              <img src={img2} alt="Lesion de brazo" />
              <div className="article_content">
                Identificación y tratamiento de las causas del
                dolor de espalda, dolor en la columna y otros
                factores que afecten su salud.

              </div>
            </article>
            <article className="article">
              <div className="article_title">Amontonadura </div>
              <img src={img3} alt="Lesion de brazo" />
              <div className="article_content">
                Tratamiento para la amontonadura, consecuencia de
                esfuerzos indebidos, que ocasionan intensos dolores
                abdominales
              </div>
            </article>
            <article className="article">
              <div style={{ textAlign: 'center' }} className="article_title">Punsada o estreñimiento  en bebes</div>
              <img src={img4} alt="Lesion de brazo" />
              <div className="article_content">
                Tratamiento para bebés que lloran mucho,
                tienen resfriados y dificultades para respirar
                porque no los cargan correctamente, lo que les
                da frío y les provoca punzadas en el pecho.
                También se enfoca en tratar el estreñimiento
                en bebés.

              </div>
            </article>
            <article className="article">
              <div className="article_title">Madres gestantes </div>
              <img src={img5} alt="Lesion de brazo" />
              <div className="article_content">
                Tratamiento para problemas durante el parto, como
                la posición incorrecta del bebé, con el objetivo de
                evitar cesáreas innecesarias. También se ofrece terapia
                para recuperar la forma física después del parto y
                evitar la acumulación excesiva de grasa abdominal.
              </div>
            </article>

            <article className="article">
              <div className="article_title">Prevención y Rehabilitación </div>
              <img src={img6} alt="Lesion de brazo" />
              <div className="article_content">
                Ofrecemos un programa integral de fisioterapia preventiva
                y rehabilitación para quienes realizan esfuerzos
                físicos intensos. Incluye orientación para prevenir
                recaídas después de la terapia, promoviendo hábitos
                saludables y cuidados para una recuperación rápida y
                sin contratiempos.

              </div>
            </article>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home