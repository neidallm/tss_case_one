import React from 'react'
import "./Inicio.css"
import ImgCamion from '../../Imagenes/Camion.png';

const Inicio = () => {
  function calcularProbabilidadUniforme(min, max) {
    // Validar que min y max sean números enteros y max >= min
    if (!Number.isInteger(min) || !Number.isInteger(max) || max < min) {
      console.error("Error: min y max deben ser números enteros, y max debe ser mayor o igual a min.");
      return;
    }
  
    // Calcular la probabilidad de cada valor y la tabla acumulada
    const valores = [];
    const probabilidades = [];
    let probAcumulada = 0;
  
    for (let i = min; i <= max; i++) {
      const probabilidad = 1 / (max - min + 1);
      probAcumulada += probabilidad;
  
      valores.push(i);
      probabilidades.push(probAcumulada);
    }
  
    // Mostrar resultados
    console.log("Valores:", valores);
    console.log("Probabilidades:", probabilidades);
  
    return {
      valores: valores,
      probabilidades: probabilidades,
    };
  }
  
  // Ejemplo de uso con min = 0 y max = 4
  const resultado = calcularProbabilidadUniforme(0, 3);

  console.log(resultado);  
  
  function customPoissonProbability(lambda, k) {
    const weights = [0.4, 0.4, 0.2, 0.1, 0.1];
  
    // Ajusta los pesos según el valor de lambda
    const adjustedWeights = weights.map((weight, i) => {
      return weight * Math.pow(lambda, i);
    });
  
    // Normaliza los pesos para que sumen 1
    const totalWeight = adjustedWeights.reduce((sum, weight) => sum + weight, 0);
    const normalizedWeights = adjustedWeights.map(weight => weight / totalWeight);
  
    // Calcula la probabilidad ponderada
    const probability = normalizedWeights[k];
  
    return probability;
  }
  
  // Ejemplo de uso
  const lambda = 2; // Media de la distribución
  
  for (let k = 0; k <= 4; k++) {
    const probability = customPoissonProbability(lambda, k);
    console.log(`Probabilidad de ${k} eventos con una media de ${lambda}: ${probability}`);
  }
  
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