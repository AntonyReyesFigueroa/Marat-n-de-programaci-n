import React from 'react'
import './Sobre_nosotros.css'

const Sobre_nosotros = () => {
  return (
    <div className='container__SN'>

      <div className="SN__title">
        <h1>FISIOTERAPIA FIGUEROA</h1>
      </div>
      <div className="  SN__description">
        <h3> Descripción de la Empresa</h3>
        <p>Fisioterapia Figueroa es un centro de cuidado
          y recuperación física ubicado en Anexo Huacariz
          - Comunpampa MZ. A LT. S/N. La empresa es
          propiedad de Magdalena Figueroa, fisioterapeuta
          principal y especialista en lesiones de hombros,
          manos, piernas y otras afecciones. Asimismo,
          brinda rehabilitación para el dolor de espalda,
          extremidades y afecciones relacionadas con el
          esfuerzo físico. Fisioterapia Figueroa se
          preocupa por el bienestar de sus pacientes
          y se compromete a brindar un apoyo integral
          en su recuperación física.</p>
      </div>

      <div className="container_m_v">
        <article className="mision">
          <h4>Misión</h4>
          <p>Proporcionar atención de fisioterapia
            de calidad, centrada en el paciente,
            para mejorar la movilidad, aliviar el
            dolor y promover el bienestar general,
            esforzándose por ser líderes en rehabilitación,
            destacando por su atención personalizada
            y enfoque integral hacia la salud física.
          </p>

        </article>
        <article className="vision">
          <h4>Visión</h4>
          <p>Ser reconocida como un centro líder en la región
            de Cajamarca, ofreciendo servicios de
            fisioterapia de excelencia que contribuyan
            al desarrollo saludable de la comunidad,
            expandiendo su alcance e integrándose de
            manera completa en el cuidado de la salud
            en Cajamarca.</p>
        </article>
      </div>
      <h3 className='tile__valores'>Valores</h3>
      <div className="valores">
        <div>Ética Profesional</div>
        <div>Empatía</div>
        <div>Compromiso</div>
        <div>Responsabilidad</div>
        <div>Participación Activa</div>
        <div>Confidencialidad</div>
        <div>Cuidado Personalizado</div>
        <div>Pasión por Ayudar</div>
        <div>Comunicación Efectiva</div>
        <div>Respeto a la Diversidad</div>
      </div>
    </div>
  )
}

export default Sobre_nosotros