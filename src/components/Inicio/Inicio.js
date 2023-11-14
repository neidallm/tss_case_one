import React from 'react'
import "./Inicio.css"
import ImgCamion from '../../Imagenes/Camion.png';

const Inicio = () => {
  return (
    <div>
    <div className='container' >
       {/* <div class="card mb-3"style={{ maxWidth: '1350px',margin:'0' }}> */}
        <div class="row g-0"  >
          <div class="col-md-6">
          <img src={ImgCamion}  alt="camion" />
         </div>
         
         <div class="col-md-6">
          <br/><br/><br/><br/>
            <h3 class="card-title">CASO DE ESTUDIO 1</h3>
              <p class="h5 card-text miParafo">
               Encontrar el tamaño óptimo del equipo para minimizar el costo total, incluyendo salarios y costo por camiones esperando.</p><br/>
              <br/>
              
              <button type="button"class="btn btn-secondary btn-lg">
               <a className="miRef" href='/Calcular'>Comenzar</a> 
              </button>
        
        {/* </div> */}
       </div>
      </div>
    </div>
    </div>
  )
}

export default Inicio