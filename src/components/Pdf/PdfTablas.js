import React, { useState } from 'react'

const PdfTablas = () => {
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
        <h1 style={{ color: "#3388af", fontSize: "30px", padding:"10px" }} >Tabla de Resultados</h1>
        
        {hayDatos ? (
          <>
          
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
                      <td>{datosLocalStorage[0].sueldo * e.nro} {datosLocalStorage[0].tipoDeCambio ==2? "Bs":"$U$"}</td>
                      <td>{elem.tmpEsperaMin}</td>
                      <td>{elem.tiempoEsperaTotal}</td>
                      <td>{Number(elem.costoEspera.toFixed(2))} {datosLocalStorage[0].tipoDeCambio ==2? "Bs":"$U$"}</td>
                      <td>{Number((elem.costoEspera + (datosLocalStorage[0].sueldo * e.nro)).toFixed(2)) } {datosLocalStorage[0].tipoDeCambio ==2? "Bs":"$U$"}</td>
                    </tr>
                    </>
                  )
                }
                
                )
                :<></>)
             })}
             
            </tbody> <br/>
            
          </table>
          <h1 style={{ color: "#3388af", fontSize: "30px", padding:"10px" }} >Tabla comparativa de Resultados</h1>
            <br/>
          <div class='row'>
            <div class="col-md-6 mx-auto">
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
                    <td>{Number((dato.costTotal).toFixed(2))} {datosLocalStorage[0].tipoDeCambio ==2? "Bs":"$U$"}</td>
                  </tr>
                ))}
              </tbody>
              </table>
            </div>

          </div>
          <br/>
          </>
        ) : (
          <p>No hay datos.</p>
        )}
      </div>
    );
  };

export default PdfTablas