import React from 'react'
import "./Inicio.css"
//  import camion from "../../Imagenes/Camion.png"
import ImgCamion from '../../Imagenes/Camion.png';
// const ImgCamion = require.context('../../Imagenes', true)

const Inicio = () => {
  return (
    <div className='container-fluid' >
       <div class="card mb-3"style={{ maxWidth: '1350px',margin:'0' }}>
        <div class="row g-0">
          <div class="col-md-4">
          <img src={ImgCamion} className="img-thumbnail animate__animated animate__fadeInLeft" alt="camion" />
         </div>
         
         <div class="col-md-8">
          <div class="card-body"><br/>
            <h5 class="card-title">Caso de estudio 1</h5>
              <p class="card-text miParafo">Una cadena de supermercados recibe suministros en un almacén central durante turnos nocturnos. La llegada de camiones sigue un proceso de Poisson, y el tiempo de descarga, influenciado por el número de trabajadores, se modela con una distribución uniforme.
              El usuario puede definir rangos de tiempo para el servicio en base al número de trabajadores. A medida que aumenta el equipo, la tasa de servicio crece. Cada trabajador recibe una tarifa horaria, y hay un costo asociado con tener camiones esperando, ambos definidos por el usuario.
              El objetivo es encontrar el tamaño óptimo del equipo para minimizar el costo total, incluyendo salarios y costo por camiones esperando.</p><br/>
              <br/>
              <button type="button"class="btn btn-info">
               <a className="miRef" href='/Calcular'>Calcular</a> 
              </button>
         </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Inicio