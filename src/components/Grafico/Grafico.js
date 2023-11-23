import React from 'react';
import { Line } from 'react-chartjs-2';
import LinesChart from './LineChart';

const Grafica = () => {
  
  const datosLocalStorage = JSON.parse(localStorage.getItem('datos')) || [];
  const hayDatos = datosLocalStorage.length > 0;
  return (
    <>
        <div className="col-lg-10">
          {
            hayDatos?(
              <>
              <h2>Gráfico de Línea</h2>
              <LinesChart></LinesChart>
              <br/>
              </>
            ):(
              <>
              <h2>No se encuentró ningún dato</h2>
              </>
            )
          }
        </div>
        {/* <div className="col-md-3">
    
        </div> */}
    </>
  );
};

export default Grafica;
