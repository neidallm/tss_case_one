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

  function calcularProbabilidadesTriangulares(a, b, c) {
    // Validar que a, b y c sean números
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      console.error("Error: a, b y c deben ser números.");
      return;
    }
  
    // Validar que a <= b <= c
    if (a > b || b > c) {
      console.error("Error: a debe ser menor o igual a b, y b debe ser menor o igual a c.");
      return;
    }
  
    // Calcular la probabilidad de cada valor
    const probabilidades = [];
  
    for (let x = 0; x <= 3; x++) {
      let probabilidad;
  
      if (x < a) {
        probabilidad = 0;
      } else if (a <= x && x < b) {
        probabilidad = 2 * (x - a) / ((b - a) * (c - a));
      } else if (b <= x && x <= c) {
        probabilidad = 2 * (c - x) / ((c - b) * (c - a));
      } else {
        probabilidad = 0;
      }
  
      probabilidades.push({
        valor: x,
        probabilidad: probabilidad.toFixed(4)
      });
    }
  
    // Mostrar resultados
    console.log("Valor | Probabilidad");
    console.log("--------------------");
    for (let i = 0; i < probabilidades.length; i++) {
      console.log(`${probabilidades[i].valor}     | ${probabilidades[i].probabilidad}`);
    }
  
    return probabilidades;
  }
  
  // Ejemplo de uso con a = 1, b = 2, y c = 3
  const resultado1 = calcularProbabilidadesTriangulares(8, 12,13 );
  
  console.log(resultado1);
  
  return (
    <div>
    <div className='container' >
       {/* <div class="card mb-3"style={{ maxWidth: '1350px',margin:'0' }}> */}
        <div class="row g-0"  >
          <div class="col-md-6">
          <img
  className="animate-fade-right animate-thrice animate-duration-2000 animate-delay-100"
  src={ImgCamion}
  alt="camion"
/>

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