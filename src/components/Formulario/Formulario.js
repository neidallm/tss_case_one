import { Field, Formik } from 'formik';
import React from 'react'
import  { useState } from 'react';
import "./Formulario.css"
import superMart from '../../Imagenes/descaga.png'
import {tablaNroTrabajador,tablaAcumulada,tablaComparativa} from "./Tablas";

const tablitaRes = [
  {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
  {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
  {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
  {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
  {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
  {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
  {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
  {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
]
let objetoConMinimo = {
  nro:0,
  costTotal:0,
};

  const Formulario = () => {

  const datosLocalStorage = JSON.parse(localStorage.getItem('datos')) || [];
  const hayDatos = datosLocalStorage.length > 0;
  const res = JSON.parse(localStorage.getItem('res')) || [];
  const  tablaCom = JSON.parse(localStorage.getItem('tablaComp')) || [];

  
  const [showSpinner, setShowSpinner] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  tablaNroTrabajador.map((element)=>{
    element.randon =  Math.floor(Math.random() * (element.max - element.min + 1)) + element.min ;
  });



  const calcular = () =>{

    const datosLocalStorage = JSON.parse(localStorage.getItem('datos')) || [];

    tablitaRes.map((element) => {
      element.rand = Math.random();
    
      element.cantCamiones = tablaAcumulada.find((elem)=>element.rand >= elem.limInf && element.rand <= elem.limSup).nro;
    
      element.tmpEsperaMin = tablaNroTrabajador.find((nroT)=>nroT.nro === datosLocalStorage[0].nroTrabajadores)?.randon;
      element.tiempoEsperaTotal = element.cantCamiones * tablaNroTrabajador.find((nroT)=>nroT.nro === datosLocalStorage[0].nroTrabajadores)?.randon;
      element.costoEspera = element.tiempoEsperaTotal * datosLocalStorage[0].costPorMinuto;
    });

    const infoString = JSON.stringify(tablitaRes);
    localStorage.setItem('tablaResp', infoString);

  };


  const comparar = () =>{
    
    const datosLocalStorage = JSON.parse(localStorage.getItem('datos')) || [];
    
    let aux = 0;
    let min = 0;

    tablaComparativa.map((element,i)=>{
      
      tablitaRes.map((elem)=>{
        aux += elem.costoEspera;
      });

      console.log(aux,(element.nro * datosLocalStorage[0].sueldo * 8 ));

      element.costTotal = aux + (element.nro * datosLocalStorage[0].sueldo * 8 );
      aux = 0;
    });

    const info = JSON.stringify(tablaComparativa);
    localStorage.setItem('tablaComp', info);

    objetoConMinimo = tablaComparativa.reduce(function (minimo, objetoActual) {
      return (objetoActual.costTotal < minimo.costTotal) ? objetoActual : minimo;
    }, tablaComparativa[0]);

    const infoString = JSON.stringify(objetoConMinimo);
    localStorage.setItem('res', infoString);

    
  };
  
  console.log(tablaComparativa);


  return (
    <div className='container'>
      <div class="row g-0">
        <div class="col-md-6">   
        <Formik
        initialValues={{
          nroTrabajadores:'',
          sueldo:'',
          costoEspera:'',
        }} 

         validate={(valores)=>{
           let errores = {};

          //validacion nroTrabajadores
            if (!valores.nroTrabajadores) {             
               errores.nroTrabajadores = "Por favor ingrese un valor entre 2-6"
            }else if (/^[a-zA-ZÀ-ÿ\s]{2,6}$/.test(valores.nroTrabajadores)) {
              errores.nroTrabajadores = 'Solo puede contener numeros'
            }
       
            //validacion salario
            if (!valores.sueldo) {             
                errores.sueldo = "Por favor ingrese un valor "
             }else if (/^[a-zA-ZÀ-ÿ\s]{1,100}$/.test(valores.sueldo)) {
               errores.sueldo = 'Solo puede contener numeros'
             }

             //validacion costo de espera
            if (!valores.costoEspera) {             
                errores.costoEspera = "Por favor ingrese un valor "
             }else if (/^[a-zA-ZÀ-ÿ\s]{1,100}$/.test(valores.costoEspera)) {
               errores.costoEspera = 'Solo puede contener numeros'
             }
          return errores;
      }
    }

    onSubmit={async (values, { setSubmitting }) => {
      setShowSpinner(true);
      console.log(values);
        const datos = [{
            nroTrabajadores:values.nroTrabajadores,
            sueldo:values.sueldo,
            costoEspera:values.costoEspera,
            costPorMinuto:(values.costoEspera / 60)
        },];
        const infoString = JSON.stringify(datos);
        localStorage.setItem('datos', infoString);
        
        calcular();

        comparar();

        await new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 2000);
        });
      
        setShowSpinner(false);

        setSuccessMessage('Cálculo completado exitosamente');
       
      
        setSubmitting(false);
    }}
 > 

       {({  errors, touched, handleSubmit,})=>(
        <form ><br/>
          <div class="row">
            <br/><br/>
               <h5 className='titulo'>Ingrese los datos</h5><br/><br/>
              
                 <label htmlFor='nroTrabajadores' className='miLabel'>Nro. de Trabajadores</label>
                 <Field 
                 type="number" 
                 class="form-control"  
                 id='nroTrabajadores' 
                 name='nroTrabajadores'  
                 placeholder="Escriba aqui el nroTrabajadores"  
                />
                 {touched.nroTrabajadores && errors.nroTrabajadores && <div className="error" >{errors.nroTrabajadores}</div>}


                 <label htmlFor='sueldo' className='miLabel'>Sueldo de los empleados por hora</label>
                 <Field 
                 type="number" 
                 class="form-control"  
                 id='sueldo'
                 name='sueldo'  
                 placeholder="Escriba aqui el sueldo"  
                />
                 {touched.sueldo && errors.sueldo && <div className="error" >{errors.sueldo}</div>}
            
                 <label htmlFor='costoEspera' className='miLabel'>Costo de espera de los camiones por hora</label>
                 <Field 

                 type="number" 
                 class="form-control"  
                 id='costoEspera'
                 name='costoEspera'  
                 placeholder="Escriba aqui el costoEspera"  
                />
                 {touched.costoEspera && errors.costoEspera && <div className="error" >{errors.costoEspera}</div>}
                <div class="row">
                <div class='text-center botones' >
                  <button  type='submit' onClick={handleSubmit}  class="btn btn-secondary registrarGuardia" >Calcular</button> 
                </div>
              </div>
              </div>
    </form>
       )}
    </Formik>
    </div> 

    <div className="col-md-6">
  {!successMessage && (
    <div>
      {showSpinner ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      ) : hayDatos ? ((
        <>
        <div>
        <strong>Datos</strong> 
        </div>
        <p><strong>Cantidad Trabajadores</strong> : {datosLocalStorage[0].nroTrabajadores} <strong>Sueldo</strong> : {datosLocalStorage[0].sueldo} <strong>Costo de Espera</strong> : {datosLocalStorage[0].costoEspera}</p>
        <br/>
        {/* <p><strong>Sueldo</strong> : {datosLocalStorage[0].sueldo} </p>
        <br/>
        <p><strong>Costo de Espera</strong> : {datosLocalStorage[0].costEspera} </p>
        <br/> */}
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Cantidad Empleados</th>
              <th scope="col">Costo Total</th>
            </tr>
          </thead>
          <tbody>
            {tablaCom.map((dato) => (
              <tr >
                <th>{dato.nro}</th>
                <td>{dato.costTotal}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br/>
        <br/>
        <p>La <strong>cantidad</strong> optima es de <strong>{res.nro}</strong>  trabajadores con un monto mínimo de <strong>{res.costTotal}</strong></p>
        </>
      )):((
        <img src={superMart} alt="camion" key={showSpinner} />
      ))}
    </div>
  )}
  {successMessage && <>
  
    <br/>
    <br/>
    <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Cantidad Empleados</th>
              <th scope="col">Costo Total</th>
            </tr>
          </thead>
          <tbody>
            {tablaComparativa.map((dato) => (
              <tr >
                <th>{dato.nro}</th>
                <td>{dato.costTotal}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br/>
        <br/>
        <p>La <strong>cantidad</strong> optima es de <strong>{objetoConMinimo.nro}</strong>  trabajadores con un monto mínimo de <strong>{objetoConMinimo.costTotal}</strong></p>
  </>}
</div>

      </div>
    </div>
  );
};

export default Formulario;