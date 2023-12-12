import React from 'react';

import LinesChart from './LineChart';

const Grafica = () => {
  
  const datosLocalStorage = JSON.parse(localStorage.getItem('datos')) || [];
  const hayDatos = datosLocalStorage.length > 0;
  return (
    <div className='container'>
        <div className="col-lg-8 mx-auto text-center" >
          {
            hayDatos?(
              <>
              <h2 className='titulo'>Gráfico de Línea</h2>
              <h2 style={{ color: "#3388af", fontSize: "18px", padding:"2rem" }}>El gráfico de resultados representa una relación entre el número de trabajadores y el costo asociado . En este gráfico, el eje horizontal (eje x) muestra la cantidad de trabajadores, mientras que el eje vertical (eje y) representa el costo correspondiente expresado en la moneda seleccionada. <br/> <br/>
              Esta representación visual proporciona una visión clara de cómo varía el costo a medida que cambia el número de trabajadores.</h2>
              <LinesChart></LinesChart>
              <br/><br/>
              </>
            ):(
              <>
              <h2 style={{ color: "#3388af", fontSize: "42px", padding:"3rem" }}>No se encuentró ningún dato</h2>
              </>
            )
          }
        </div>
        {/* <div className="col-md-3">
    
        </div> */}
    </div>
  );
};

export default Grafica;
