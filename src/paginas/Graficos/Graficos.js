import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ImgCamion from '../../Imagenes/Camion.png';
const Graficos = () => {
  return (
    <div>
        <Header/>
        <div className='container'>
        <div>
          <img
  className="animate-fade-right animate-thrice animate-duration-2000 animate-delay-100"
  src={ImgCamion}
  alt="camion"
/>

         </div>

        </div>
        <Footer/>
    </div>
  )
}

export default Graficos