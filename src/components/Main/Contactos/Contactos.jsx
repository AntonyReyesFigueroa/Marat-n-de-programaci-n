import React from 'react'
import "./Contacto.css"

const Contactos = () => {
  return (
    <div className='main_formulario'>
      <div className='formulario_container'>
        <section className='formulario1'>
          <h3>ENVÍANOS UN MENSAJE</h3>
          <form>
            <div>
              
              <label htmlFor="txtName">Ingrese su nombre:</label>
              <input type="text" name="txtName" id="txtName" maxLength="50" required />
            </div>
            <div>
              <label htmlFor="txtEmail">Ingrese su correo electrónico:</label>
              <input type="email" name="txtEmail" id="txtEmail" autoComplete="off" maxLength="128" required />
            </div>
            <div>
              <label htmlFor="bodyDetalle">Ingrese su comentario:</label>
              <textarea name="bodyDetalle" id="bodyDetalle" rows="8" required></textarea>
            </div>
            <div className='button_container'>
            <button type="submit" className="btn btn-light">ENVIAR MENSAJE</button>
            </div>      
          </form>
        </section>

        <section className='formulario2'>
          <h3>
            ¿CÓMO LLEGAR?
          </h3>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d761.6759760680552!2d-78.48204578414267!3d-7.2042075008519255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-7.2045561!2d-78.48239439999999!4m5!1s0x91b25b13e8d18711%3A0x43d2548201b69795!2sIGLESIA%20PENTECOSTAL%20LA%20COSECHA%20CAJAMARCA%2C%20Avenida%20San%20Mart%C3%ADn%20de%20Porres%2C%20Cajamarca!3m2!1d-7.2041740999999995!2d-78.4794849!5e1!3m2!1ses!2spe!4v1707671214497!5m2!1ses!2spe" 
          ></iframe>
        </section>
      </div>
    </div>
  )
}


export default Contactos; 