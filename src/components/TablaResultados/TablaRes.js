import React from 'react';

const TablaRes = () => {


  // Obtener datos del localStorage
 const datosLocalStorage = JSON.parse(localStorage.getItem('datos')) || [];
 const tablitaRes = JSON.parse(localStorage.getItem('tablaResp')) || [];
 const hayDatos = datosLocalStorage.length > 0;


  console.log(tablitaRes,datosLocalStorage);


  return (
    <div className='container'>
      <h1>Tabla de Resultados</h1>
      {hayDatos ? (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Horas</th>
              <th scope="col">Aleatorio</th>
              <th scope="col">Cantidad de Camiones</th>
              <th scope="col">Número de trabajadores</th>
              <th scope="col">Sueldo Trabajador</th>
              <th scope="col">Tiempo de espera minutos</th>
              <th scope="col">Tiempo de espera Total</th>
              <th scope="col">Costo de espera</th>
              <th scope="col">Costo Total</th>
            </tr>
          </thead>
          <tbody>
            {tablitaRes.map((dato,index) => (
              <tr key={index}>
                <th>{index+1}</th>
                <td>{dato.rand}</td>
                <td>{dato.cantCamiones}</td>
                <td>{datosLocalStorage[0].nroTrabajadores}</td>
                <td>{datosLocalStorage[0].sueldo*datosLocalStorage[0].nroTrabajadores}</td>
                <td>{dato.tmpEsperaMin}</td>
                <td>{dato.tiempoEsperaTotal}</td>
                <td>{dato.costoEspera}</td>
                <td>{dato.costoEspera + (datosLocalStorage[0].sueldo*datosLocalStorage[0].nroTrabajadores) }</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay datos.</p>
      )}
    </div>
  );
};

export default TablaRes;
