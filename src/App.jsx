
import './App.css'

function App() {


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

          <Routes>
            <Route element={<ProtectedRoutes />}></Route>

            
            <Route path='/' element={<Home />} />
            <Route path='/sobre-nosotros' element={<Sobre_nosotros />} />
            <Route path='/contactos' element={<Contactos />} />

            <Route path='/*' element={<Error404 />} />

            <Route path='/mensaje' element={<Mensajes />} />



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
