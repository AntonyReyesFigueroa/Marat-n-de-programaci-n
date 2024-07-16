import React, { useEffect, useState } from 'react'
import useGet from '../../Hooks/useGet'
import usePut from '../../Hooks/usePut'


const CantidadMensajes = () => {

  const URL = 'https://65deae51dccfcd562f573df9.mockapi.io/Fisioterapia-Figueroa/Mensaje'

  const { data, getData } = useGet(URL)

  const { update, updateData } = usePut(URL)

  const [infodata, setInfodata] = useState([])


  

  const cambiarcolor = (data) => {
    data?.[0].lista_mensaje.map(d => {
      d.color='rgb(20, 49, 129)'
      infodata.push(d)
      console.log(d);
    })

    return infodata
  }
 

  

 

  const actualizarContadorMensajes = () => {

    const info = {
      numero_sms_nuevos: 0,
      lista_mensaje: cambiarcolor(data)
    }


    updateData(info, 1)

    setInfodata({})

  }




  return (
    <div style={{cursor:'pointer'}}
      onClick={actualizarContadorMensajes}
      className='cant_mensajes' >{
        data?.[0].numero_sms_nuevos}
    </div>
  )
}

export default CantidadMensajes