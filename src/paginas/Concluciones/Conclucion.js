import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import costo from "../../Imagenes/Costo.png"
import "./conclucion.css"
const Conclucion = () => {
    

    const datosLocalStorage = JSON.parse(localStorage.getItem('datos')) || [];
    const hayDatos = datosLocalStorage.length > 0;
    const res = JSON.parse(localStorage.getItem('res')) || [];
  
    console.log(datosLocalStorage);
    
  return (
  <>
    <Header/>
    <div className='container'>
        <h1 style={{ color: "#3388af", fontSize: "30px", padding:"2rem" }} >Conclusiones</h1>
    <div className='row'>
        <div className="col-md-6">
        <img src={costo} alt="costo" />
        </div>
        <div className="col-md-6">
        <br/>
        <div>
        { hayDatos ? ((
            <>
            <br/>
            <p className='miConclucion'>Según la simulación con los datos Ingresados : Número de Trabajadores: <strong>{datosLocalStorage[0].nroTrabajadores}</strong> <br/>Sueldo por hora de los empleados: <strong>{datosLocalStorage[0].sueldo}  {datosLocalStorage[0].tipoDeCambio == 2? "Bs": "$U$"}</strong><br/>Costo por hora de Espera de los camiones  : <strong>{datosLocalStorage[0].costoEspera} {datosLocalStorage[0].tipoDeCambio == 2? "Bs": "$U$"}</strong>
            </p>
            
            <br/>
            <p ><strong>Respuesta:</strong> La cantidad óptima que genera menos gastos en el proceso de descarga de los camiones es de : <strong>{res.nro}</strong>  trabajadores con un monto mínimo de : <strong>{Number((res.costTotal).toFixed(2))} {datosLocalStorage[0].tipoDeCambio == 2? "Bs": "$U$"} </strong>  </p>
            </>
        )):((
            <h1 style={{ color: "#3388af", fontSize: "30px", padding:"2rem" }} >no se registraron datos</h1>
        ))}
        </div>
        </div>
</div>
    </div>
    <Footer/>
    </>
  )
}

export default Conclucion