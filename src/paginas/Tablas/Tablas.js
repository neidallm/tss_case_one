import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import TablaRes from '../../components/TablaResultados/TablaRes'

const Tablas = () => {
  return (
    <div>
        <Header/>
        <div className='Container'>
          <TablaRes/>
        </div>
        <Footer/>
    </div>
  )
}

export default Tablas