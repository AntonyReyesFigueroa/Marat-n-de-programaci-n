import React, { useEffect, useState } from 'react'
import useGet from '../../../Hooks/useGet.js'
import './Mensaje.css'
import DetalleMensaje from './DetalleMensaje.jsx'


const Mensajes = () => {

  const URL = 'https://65deae51dccfcd562f573df9.mockapi.io/Fisioterapia-Figueroa/Mensaje'

  const { data, getData } = useGet(URL)

  const [datosInvertidos, setDatosInvertidos] = useState()

  useEffect(() => {
    setDatosInvertidos(data?.[0].lista_mensaje.slice().reverse())
    
  }, [data])
  



  return (
    <div className='mensajes'>
      <div className='container_mensaje'>
        <h1>Lista de mensajes</h1>

        <div className='container_container_mensaje'>
          {
            datosInvertidos?.map((d, i) => (

              <DetalleMensaje
                key={i}
                data={d}
              />

            ))

          }
        </div>


      </div>
    </div>



  )
}





export default Mensajes  