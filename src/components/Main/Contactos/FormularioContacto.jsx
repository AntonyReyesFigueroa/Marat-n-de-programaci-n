import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import usePost from '../../../Hooks/usePost.js'
import useGet from '../../../Hooks/useGet.js';
import usePut from '../../../Hooks/usePut.js';
import { useAuth0 } from '@auth0/auth0-react';

const FormularioContacto = () => {

    const URL = 'https://65deae51dccfcd562f573df9.mockapi.io/Fisioterapia-Figueroa/Mensaje'

    const [guardarmensaje, setGuardarMensaje] = useState([])

    const { loginWithRedirect, isAuthenticated, isLoading, logout, user, } = useAuth0();


    const { register, handleSubmit, reset } = useForm();

    const { data, getData } = useGet(URL)

    const { update, updateData } = usePut(URL)

    
    const getCurrentDateTime = () => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Agrega un cero al inicio si el mes es de un solo dígito
        const day = String(currentDate.getDate()).padStart(2, '0'); // Agrega un cero al inicio si el día es de un solo dígito
        const hours = String(currentDate.getHours()).padStart(2, '0'); // Agrega un cero al inicio si la hora es de un solo dígito
        const minutes = String(currentDate.getMinutes()).padStart(2, '0'); // Agrega un cero al inicio si los minutos son de un solo dígito
      
        return `${year}-${month}-${day}    🕥    ${hours}:${minutes}`;
      };

    const submit = mensajerecibido => {
        mensajerecibido.picture = `${isAuthenticated? user?.picture: 'https://img.freepik.com/vector-premium/icono-perfil-usuario-estilo-plano-ilustracion-vector-avatar-miembro-sobre-fondo-aislado-concepto-negocio-signo-permiso-humano_157943-15752.jpg'}`
        mensajerecibido.color = 'rgb(45, 85, 194)'
        mensajerecibido.fecha = getCurrentDateTime()
        if(isAuthenticated){
            mensajerecibido.email = user?.email
            mensajerecibido.name = user?.name
        }
        console.log(mensajerecibido);

        const info = {
            numero_sms_nuevos : data?.[0].numero_sms_nuevos+1,
            lista_mensaje: []
        }

       

        if (mensajerecibido?.name !== '' && mensajerecibido?.email !== '' && mensajerecibido?.comentario !== '' ) {

            console.log(mensajerecibido);
            console.log(data?.[0].lista_mensaje);
            guardarmensaje.push(...data?.[0].lista_mensaje)
            guardarmensaje.push(mensajerecibido)
            console.log(guardarmensaje);
            info.lista_mensaje = guardarmensaje
            console.log(info);
            updateData(info, 1)
            alert("Mensaje enviado correctamente, pronto nos comunicaremos con usted")
            reset();

        }else{
            alert('Mensaje no enviado, los datos no han sido llenados correcto')
        }

    }

  

    return (
        <form onSubmit={handleSubmit(submit)} className='container_form_contacto'>

            {
                isAuthenticated ?
                    <div className='contacto__input'>
                        <label htmlFor="name">Ingrese su nombre:</label>
                        <b>{user.name} </b>
                    </div>
                    :
                    <div className='contacto__input'>
                        <label htmlFor="name">Ingrese su nombre:</label>
                        <input {...register('name')} type="text" id='name' placeholder=' Ingrese su nombre' required />
                    </div>
            }

            {
                isAuthenticated ?
                    <div className='contacto__input'>
                        <label htmlFor="txtEmail">Ingrese su correo electrónico:</label>
                        <b>{user.email} </b>
                    </div>
                    :
                    <div className='contacto__input'>
                        <label htmlFor="txtEmail">Ingrese su correo electrónico:</label>
                        <input {...register('email')} type="email" id='txtEmail' maxLength="128" placeholder=' Ingrese correo electronico' required />
                    </div>
            }




            <div className='contacto__input'>
                <label htmlFor="txtphone">Ingrese número de telefono:</label>
                <input {...register('phone')} type="number" id='txtphone' maxLength="12" placeholder=' Ingrese número de telefono' required />
            </div>


            <div className='contacto__input'>
                <label htmlFor="bodyDetalle">Ingrese su mensaje:</label>
                <textarea {...register('comentario', { required: true })} name="comentario" id="bodyDetalle" rows="8" required></textarea>
            </div>
            <div className='button_container'>
                <button type="submit" className="btn btn-light">Enviar mensaje</button>
            </div>

   

        </form>
    )
}


export default FormularioContacto