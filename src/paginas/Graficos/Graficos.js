import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import LineChart from '../../components/Grafico/Grafico'


const Graficos = () => {
  return (
    <div>
        <Header/>
        <div className='container'>

        <LineChart/>
        </div>
        <Footer/>
    </div>
  )
}

export default Graficos