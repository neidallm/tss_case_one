import React, { useState } from 'react';

const TablaRes = () => {

  
  const datosLocalStorage = JSON.parse(localStorage.getItem('datos')) || [];

  const tablitaRes = JSON.parse(localStorage.getItem('tablaResp')) || [];
  const tablaCom = JSON.parse(localStorage.getItem('tablaComp')) || [];

  const hayDatos = datosLocalStorage.length > 0;
  
  const [num, setNum] = useState(datosLocalStorage[0]?.nroTrabajadores);

  const handleSelect = (event) => {
    const selectedValue = parseInt(event.target.value, 10);
    console.log(selectedValue);
    setNum(selectedValue);
  };

  return (
    <div className='container'>
      <h1 >Tabla de Resultados</h1>
      
      {hayDatos ? (

        <>
        <div class='row'>
          <div class="col-md-7">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Número Trabajadores</th>
                  <th>Costo Total</th>
                </tr>
              </thead>
              <tbody>
              {tablaCom.map((dato) => (
                <tr >
                  <th>{dato.nro}</th>
                  <td>{Number((dato.costTotal).toFixed(2))}</td>
                </tr>
              ))}
            </tbody>
            </table>
          </div>

          <div class="col-md-5">
            <select 
            class="form-select" 
            aria-label="Default select"
            value={num}
            onChange={handleSelect}
            >
            ({tablitaRes.map((e)=>{
              return (<option value={e.nro} >{e.nro} Trabajadores</option>)
            })})
            </select>
          </div>
        </div>
        <br/>
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
           {tablitaRes.map(e => {
            return (e.nro === num? 
              
              e.tabla.map((elem,index)=>{
                return (
                  <>
                  <tr key={index}>
                    <th>{index+1}</th>
                    <td>{Number((elem.rand).toFixed(2))}</td>
                    <td>{elem.cantCamiones}</td>
                    <td>{e.nro}</td>
                    <td>{datosLocalStorage[0].sueldo * e.nro}</td>
                    <td>{elem.tmpEsperaMin}</td>
                    <td>{elem.tiempoEsperaTotal}</td>
                    <td>{Number(elem.costoEspera.toFixed(2))}</td>
                    <td>{Number((elem.costoEspera + (datosLocalStorage[0].sueldo * e.nro)).toFixed(2)) }</td>
                  </tr>
                  </>
                )
              }
              
              )
              :<></>)
           })}
           
          </tbody>
        </table>
        <br/>
        </>
      ) : (
        <p>No hay datos.</p>
      )}
    </div>
  );
};

export default TablaRes;
