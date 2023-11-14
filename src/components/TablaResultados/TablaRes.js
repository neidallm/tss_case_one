import React from 'react';
import {tablaNroTrabajador,tablaAcumulada,factorial} from "./tablas";

const tablitaRes = [
  {rand:0,cantCamiones:0,tiempoEsperaTotal:0,costoEspera:0},
  {rand:0,cantCamiones:0,tiempoEsperaTotal:0,costoEspera:0},
  {rand:0,cantCamiones:0,tiempoEsperaTotal:0,costoEspera:0},
  {rand:0,cantCamiones:0,tiempoEsperaTotal:0,costoEspera:0},
  {rand:0,cantCamiones:0,tiempoEsperaTotal:0,costoEspera:0},
  {rand:0,cantCamiones:0,tiempoEsperaTotal:0,costoEspera:0},
  {rand:0,cantCamiones:0,tiempoEsperaTotal:0,costoEspera:0},
]

const TablaRes = () => {


  // Obtener datos del localStorage
 const datosLocalStorage = JSON.parse(localStorage.getItem('datos')) || [];
 const hayDatos = datosLocalStorage.length > 0;

tablaNroTrabajador.map((element)=>{
  element.randon =  Math.floor(Math.random() * (element.max - element.min + 1)) + element.min ;
});


tablitaRes.map((element) => {
  element.rand = Math.random();

  //console.log(tablaAcumulada.find((elem)=>element.rand >= elem.limInf && element.rand <= elem.limSup));
  element.cantCamiones = tablaAcumulada.find((elem)=>element.rand >= elem.limInf && element.rand <= elem.limSup).nro;

  //console.log(tablaNroTrabajador.find((nroT)=>nroT.nro === datosLocalStorage[0].nroTrabajadores));
  element.tiempoEsperaTotal = element.cantCamiones * tablaNroTrabajador.find((nroT)=>nroT.nro === datosLocalStorage[0].nroTrabajadores).randon;
  element.costoEspera = element.tiempoEsperaTotal * (datosLocalStorage[0].costoEspera / 60) 
  
});

console.log(tablitaRes);


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
                <td>{datosLocalStorage[0].sueldo}</td>
                <td>{dato.tiempoEsperaTotal}</td>
                <td>{dato.handle}</td>
                <td>{dato.handle}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay datos en el localStorage.</p>
      )}
    </div>
  );
};

export default TablaRes;
