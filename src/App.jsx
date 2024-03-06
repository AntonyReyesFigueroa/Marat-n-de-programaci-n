import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Main/Home/Home'
import Sobre_nosotros from './components/Main/SobreNosotros/Sobre_nosotros'
import Contactos from './components/Main/Contactos/Contactos'
import ProtectedRoutes from './components/ProtectedRoutes'
import Error404 from './components/Error404'
import { Whatsapp, GeoAlt, TelephoneFill, Tiktok } from 'react-bootstrap-icons';
import Mensajes from './components/Main/Mensajes/Mensajes'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className='container__app'>

        <header>
          <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        </header>

        <main onClick={() => setIsOpen(false)}>


          <b>
            <a href="https://api.whatsapp.com/send?phone=51918320136&text=https://fisioterapia-figueroa.netlify.app/%0AHola,%20estoy%20interesado%20deseo%20obtener%20más%20información%20" target="_blank" rel="noopener noreferrer">
              <div className='contactanos_flotante'><Whatsapp color="rgb(86, 253, 108)" size={24} />Contactanos</div> </a>
          </b>

          {/* <a href="mailto:antonyreyesfigueroa@gmail.com?subject=Solicitud de información&body=Hola,%20estoy%20interesado%20y%20deseo%20obtener%20más%20información." target="_blank" rel="noopener noreferrer">
            <div className='contactanos_flotante'>
              Contactanos
            </div>
          </a> */}


          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sobre-nosotros' element={<Sobre_nosotros />} />
            <Route path='/contactos' element={<Contactos />} />

            <Route path='/*' element={<Error404 />} />

            <Route path='/mensaje' element={<Mensajes />} />

            <Route element={<ProtectedRoutes />}>
              {/* <Route path='/reseña' element={<Reseña />} />
            <Route path='/Empleado' element={<Empleado />} />  */}
            </Route>

            {/* <Route path='/' element={<Home />} />
<Route path='/Sobre-Nosotros' element={<SobreNosotros />} />
<Route path='/Carta' element={<Carta />} />
<Route path='/Login' element={<Login />} />

<Route path='/*' element={<Error />} /> */}

            {/* <Route element={<ProtectedRoutes />}>
              <Route path='/Reservaciones' element={<Reservaciones />} />
              <Route path='/Reseña' element={<Reseña />} />
              <Route path='/Empleado' element={< Empleado />} />
            </Route> */}
            {/* <Route element={<ProtectedRoutes />} >
    <Route path='/Empleado' element={<Empleado />} /> */}
            {/* <Route path='/pokedex/:name' element={<PokemonDetails />} /> */}
            {/* </Route> */}
          </Routes>


        </main>

        <footer>
          <Footer />
        </footer>

      </div>
    </>
  )
}

export default App
