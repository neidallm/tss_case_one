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
              <LinesChart></LinesChart>
              <br/>
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
