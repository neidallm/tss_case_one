import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Formulario from '../../components/Formulario/Formulario'

const Calcular = () => {
  return (
    <div>
        <Header/>
        <div className='container'>
          <Formulario/>
        </div>
        <Footer/>
    </div>
  )
}

export default Calcular