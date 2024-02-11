import React from 'react'
import './Home.css'
import img1 from '../../../image/lesion_brazo.png'
import img2 from '../../../image/dolor_espalda.png'
import img3 from '../../../image/dolor_barriga.jpg'

const Home = () => {
  return (
    <div className='container__home'>

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
              Identificación y tratamiento de las causas 
              del dolor de espalda, proporcionando soluciones 
              personalizadas.

              </div>
            </article>
            <article className="article">
              <div className="article_title">Amontonadura </div>
              <img src={img3} alt="Lesion de brazo" />
              <div className="article_content">
                Tratamiento de amontonadura, por haber hecho fuerza indebida, 
                generando fuertes dolores de barriga 
              </div>
            </article>
            <article className="article">
              <div className="article_title"> </div>
              <img src={img1} alt="Lesion de brazo" />
              <div className="article_content">
                Tratamientos especializados con enfoques terapéuticos
                específicos en lesiones de Hombros, brazos, y piernas
              </div>
            </article>
            <article className="article">
              <div className="article_title">Lesiones </div>
              <img src={img1} alt="Lesion de brazo" />
              <div className="article_content">
                Tratamientos especializados con enfoques terapéuticos
                específicos en lesiones de Hombros, brazos, y piernas
              </div>
            </article>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home