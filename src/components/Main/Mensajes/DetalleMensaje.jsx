import React from 'react'

const DetalleMensaje = ({ data }) => {
    return (
        <div className='detalleMensaje' style={{backgroundColor:`${data.color}`}}>
            <div className='mensaje_foto'>
                <img src={data.picture} alt={data.name} />
                <b>{data.name} </b>
            </div>

            <div className='contenido_mensaje'>
                <div>
                    <b>Correo :</b>
                    <p className='contenido_mensaje_data'>{data.email} </p>
                </div>
                <div>
                    <b>Teléfono  :</b>
                    <p className='contenido_mensaje_data'>{data.phone} </p>
                </div>

                <div>
                    <b>Mensaje  :</b>
                    <p className='contenido_mensaje_data'>{data.comentario} </p>
                </div>
            </div>
        </div>
    )
}

export default DetalleMensaje