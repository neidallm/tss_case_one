import { Field, Formik, } from 'formik';
import React from 'react'
import  { useState } from 'react';
import './Formulario.css';
import superMart from '../../Imagenes/descaga.png';
import {tablaNroTrabajador,tablaAcumuladaC,tablaComparativa,tablaSelect} from './Tablas';
import {poisson,uniform} from './Distribucion';

let objetoConMinimo = {
  nro:0,
  costTotal:0,
};

let datoslocales = [{
  nroTrabajadores:"",
  sueldo:"",
  costoEspera:"",
  costPorMinuto:"",
  distribucion:"",
  par1: "",
  par2: "",
  par3: "",
  tipoDeCambio: ""
},];

  const Formulario = () => {

  const datosLocalStorage = JSON.parse(localStorage.getItem('datos')) || [];
  const hayDatos = datosLocalStorage.length > 0;
  const res = JSON.parse(localStorage.getItem('res')) || [];
  const  tablaCom = JSON.parse(localStorage.getItem('tablaComp')) || [];

  console.log(datosLocalStorage);
  const [showSpinner, setShowSpinner] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  tablaNroTrabajador.map((element) => {
    element.randon =  Math.floor(Math.random() * (element.max - element.min + 1)) + element.min ;
  });

  const randomAcum = (dis,a,b,c) =>{
    console.log(dis,a,b,c);
    if (dis == 1) {
      tablaAcumuladaC.map((elem)=>{
        elem.ran = poisson(a);
      })
    } else if (dis == 2) {
      tablaAcumuladaC.map((elem)=>{
        elem.ran = uniform(a,b);
      })
    } 
    // else if (dis == 3) {
    //   tablaAcumuladaC.map((elem)=>{
    //     elem.ran = triangular(a,b,c);
    //   })
    // }
    console.log(tablaAcumuladaC);
    
    let aux = 0;
    tablaAcumuladaC.map((e,index = 0)=>{
      console.log(e.ran);
      aux = aux + e.ran;
      if (index == 0) {
        e.limInf = 0;
      }else{
        e.limInf = tablaAcumuladaC[index-1]?.limSup;
      }
      console.log(e.limInf);
      e.limSup = aux;
      index++;
    })

  }

  console.log(tablaAcumuladaC);

  const infoString = JSON.stringify(tablaNroTrabajador);
  localStorage.setItem('tablaTrab', infoString);

  const calcular = () =>{

    const datosLocalStorage = JSON.parse(localStorage.getItem('datos')) || [];

    for (let i = 0; i < 8; i++) {
      let ran = Math.random();
      let nroC = tablaAcumuladaC.find((elem)=> ran >= elem.limInf && ran <= elem.limSup).nro;
    
      tablaSelect.map((element) => {

        element.tabla[i].rand = ran;
        element.tabla[i].cantCamiones = nroC; 
      });
    }

    tablaSelect.map((e)=>{

      e.tabla.map((elem)=>{
        elem.cantCamiones = tablaAcumuladaC.find((element)=>elem.rand >= element.limInf && elem.rand <= element.limSup).nro;

        elem.tmpEsperaMin = tablaNroTrabajador.find((nroT)=>nroT.nro === e.nro).randon;

        elem.tiempoEsperaTotal = elem.cantCamiones * tablaNroTrabajador.find((nroT)=>nroT.nro === e.nro).randon;

        elem.costoEspera = elem.tiempoEsperaTotal * datosLocalStorage[0].costPorMinuto;
      });

    });


    const infoString = JSON.stringify(tablaSelect);
    localStorage.setItem('tablaResp', infoString);

  };


  const comparar = () =>{
    
    const datosLocalStorage = JSON.parse(localStorage.getItem('datos')) || [];
    
    let aux = 0;
    
    tablaSelect.map((elem, index)=>{
      elem.tabla.map((e)=>{
        aux+= e.costoEspera
      });

      tablaComparativa[index].costTotal = aux + (elem.nro * datosLocalStorage[0].sueldo * 8 );
      aux = 0;
    })

    const info = JSON.stringify(tablaComparativa);
    localStorage.setItem('tablaComp', info);

    objetoConMinimo = tablaComparativa.reduce(function (minimo, objetoActual) {
      return (objetoActual.costTotal < minimo.costTotal) ? objetoActual : minimo;
    }, tablaComparativa[0]);

    const infoString = JSON.stringify(objetoConMinimo);
    localStorage.setItem('res', infoString);

    
  };
  
  console.log(tablaSelect);


  return (
    <div className='container'>
      <div class="row g-0">
        <div class="col-md-6">   
        <Formik
        initialValues={
          hayDatos?
          {
            tipoDeCambio:datosLocalStorage[0].tipoDeCambio,
            nroTrabajadores:datosLocalStorage[0].nroTrabajadores,
            sueldo: datosLocalStorage[0].sueldo,
            costoEspera: datosLocalStorage[0].costoEspera,
            distribucion:datosLocalStorage[0].distribucion,
            par1:datosLocalStorage[0].par1,
            par2:datosLocalStorage[0].par2,
            par3:datosLocalStorage[0].par3
          }:
          {
            tipoDeCambio: 1,
            nroTrabajadores:'',
            sueldo:'',
            costoEspera:'',
            distribucion: 1,
            par1:'',
            par2:'',
            par3:''
          }
        } 

         validate={(valores)=>{
          console.log(valores);
           let errores = {};

          //validacion nroTrabajadores
            if (!valores.nroTrabajadores || (valores.nroTrabajadores > 6 || valores.nroTrabajadores < 2)) {             
               errores.nroTrabajadores = "Por favor ingrese un valor entre 2-6"
            }else if (/^[a-zA-ZÀ-ÿ\s]{2,6}$/.test(valores.nroTrabajadores)) {
              errores.nroTrabajadores = 'Solo puede contener números'
            }
       
            //validacion salario
            if (!valores.sueldo || valores.sueldo < 1) {             
                errores.sueldo = "Por favor ingrese un valor "
             }else if (/^[a-zA-ZÀ-ÿ\s]{1,100}$/.test(valores.sueldo)) {
               errores.sueldo = 'Solo puede contener números'
        
              }

             //validacion costo de espera
            if (!valores.costoEspera || valores.costoEspera < 1) {             
                errores.costoEspera = "Por favor ingrese un valor "
             }else if (/^[a-zA-ZÀ-ÿ\s]{1,100}$/.test(valores.costoEspera)) {
               errores.costoEspera = 'Solo puede contener números'
             }

             if (valores.distribucion == 1) {
              
              if (!valores.par1 ) {             
                errores.par1 = "Por favor ingrese un valor"
              }else if (!/^[0-6]$/.test(valores.par1)) {
                errores.par1 = 'Solo puede contener números del 1 al 6'
              }

             } else if(valores.distribucion == 2) {
              
              if (!valores.par1 < 0) {
                errores.par1 = "Por favor ingrese un valor positivo";
              } else if (!/^[0-6]+$/.test(valores.par1)) {
                errores.par1 = 'Solo puede contener números enteros positivos';
              }
              

              if (!valores.par2 > 6) {             
                errores.par2 = "Por favor ingrese un valor entre 1 y 6"
              }else if (!/^[1-6]+$/.test(valores.par2)) {
                errores.par2 = 'Solo puede contener números entre 1 y 6'
              }

             } else if(valores.distribucion == 3){
              if (!valores.par1 < 0) {             
                errores.par1 = "Por favor ingrese un valor positivo"
              }else if (!/^[0-6]+$/.test(valores.par1)) {
                errores.par1 = 'Solo puede contener números enteros positivos'
              }
              
              if (!valores.par2 > 6) {             
                errores.par2 = "Por favor ingrese un valor entero positivo"
              }else if (!/^[1-6]+$/.test(valores.par2)) {
                errores.par2 = 'Solo puede contener números entre 1 y 6'
              }

              if (!valores.par3 < 0 ) {             
                errores.par3 = "Por favor ingrese un valor enteros positivos"
              }else if (!/^[1-6]+$/.test(valores.par3)) {
                errores.par3 = 'Solo puede contener números entre 1 y 6'
              }
             }
          return errores;
      }
    }

    onSubmit={async (values, { setSubmitting }) => {
      setShowSpinner(true);
      console.log(values.distribucion,values.distribucion == 2?"si":"no");
        const datos = [{
            nroTrabajadores:values.nroTrabajadores,
            sueldo:values.sueldo,
            costoEspera:values.costoEspera,
            costPorMinuto:(values.costoEspera / 60),
            distribucion:values.distribucion,
            par1: values.par1,
            par2: values.par2,
            par3: values.par3,
            tipoDeCambio: values.tipoDeCambio
        },];
        const infoString = JSON.stringify(datos);
        localStorage.setItem('datos', infoString);
        
        //randomAcum(values.distribucion,values.par1,values.par2,values.par3);
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

       {({ values, errors, touched, handleSubmit,})=>(
        <form ><br/>
          <div class="row mr-3">
            <br/>
            <br/>
               <h5 className='titulo'><strong>Ingrese los datos</strong></h5><br/><br/>
              
                <label htmlFor='tipoDeCambio:' className='miLabel'><strong>Tipo de Cambio</strong></label>
                  <Field 
                  as="select"
                  class="form-control"  
                  id='costoEspera'
                  name='tipoDeCambio'   
                  >
                   <option value="2" >Bolivianos {"(Bs)"}</option>
                   <option value="1" >Dólares {"$"}</option>
                  </Field>

                 <label htmlFor='nroTrabajadores' className='miLabel'><strong>Nro. de Trabajadores</strong></label>
                 <Field 
                 type="number" 
                 class="form-control"  
                 id='nroTrabajadores' 
                 name='nroTrabajadores'  
                 placeholder="Ingrese la cantidad de trabajadores"  
                />
                 {touched.nroTrabajadores && errors.nroTrabajadores && <div className="error" >{errors.nroTrabajadores}</div>}


                 <label htmlFor='sueldo' className='miLabel'><strong>Sueldo de los empleados por hora</strong></label>
                 <Field 
                 type="number" 
                 class="form-control"  
                 id='sueldo'
                 name='sueldo'  
                 placeholder={values.tipoDeCambio == 2? "Ingrese el sueldo Bs/Hora":"Ingrese el sueldo $US/Hora"}  
                />
                 {touched.sueldo && errors.sueldo && <div className="error" >{errors.sueldo}</div>}
            
                 <label htmlFor='costoEspera' className='miLabel'><strong>Costo de espera de los camiones por hora</strong></label>
                 <Field 

                 type="number" 
                 class="form-control"  
                 id='costoEspera'
                 name='costoEspera'  
                 placeholder={values.tipoDeCambio == 2? "Ingrese el costo Bs/Hora":"Ingrese el costo $US/Hora"}
                />
                 {touched.costoEspera && errors.costoEspera && <div className="error" >{errors.costoEspera}</div>}

                 <label htmlFor='distribucion' className='miLabel'><strong>Distribución</strong></label>
                  <Field 
                  as="select"
                  class="form-control"  
                  id='costoEspera'
                  name='distribucion'   
                  >
                   <option value="1" >Poisson</option>
                   <option value="2" >Distribución Uniforme</option>
                   <option value="3" >Distribución Triángular</option>
                  </Field>
                  <br/>
                  { values.distribucion == 1 ?
                  <>
                    <label htmlFor='par1' className='miLabel'><strong>Cantidad de camiones promedio por hora</strong></label>
                    <Field 
                    type="number" 
                    class="form-control"  
                    id='costoEspera'
                    name='par1'  
                    min="0"
                    placeholder="Promedio camiones/Hora"  
                    />
                    {touched.par1 && errors.par1 && <div className="error" >{errors.par1}</div>}
                 </>
                 :
                 values.distribucion == 2?
                 <>
                    <label htmlFor='par1' className='miLabel'><strong>Mínimo de camiones</strong></label>
                      <Field 
                      type="number" 
                      class="form-control"  
                      id='costoEspera'
                      name='par1'  
                      placeholder="Mínimo de camiones/Hora"  
                      min="0"
                    />
                    {touched.par1 && errors.par1 && <div className="error" >{errors.par1}</div>}

                    <label htmlFor='par2' className='miLabel'><strong>Máximo de camiones</strong></label>
                      <Field 
                      type="number" 
                      class="form-control"  
                      id='costoEspera'
                      name='par2'
                      min="0"  
                      placeholder="Máximo de camiones/Hora"  
                    />
                    {touched.par2 && errors.par2 && <div className="error" >{errors.par2}</div>}

                 </>:values.distribucion == 3 ?
                 <>
                 <label htmlFor='par1' className='miLabel'><strong>Mínimo de camiones</strong></label>
                  <Field 
                  type="number" 
                  class="form-control"  
                  id='costoEspera'
                  name='par1' 
                  min="0" 
                  placeholder="Escriba aqui el a"  
                 />
                  {touched.par1 && errors.par1 && <div className="error" >{errors.par1}</div>}

                 <label htmlFor='par2' className='miLabel'><strong>Máximo de camiones</strong></label>
                  <Field 
                  type="number" 
                  class="form-control"  
                  id='costoEspera'
                  name='par2'
                  min="0"  
                  placeholder="Escriba aqui el b"  
                 />
                  {touched.par2 && errors.par2 && <div className="error" >{errors.par2}</div>}

                 <label htmlFor='par3' className='miLabel'><strong>Cantidad probable de camiones</strong></label>
                  <Field 
                  type="number" 
                  class="form-control"  
                  id='costoEspera'
                  name='par3'
                  min="0"  
                  placeholder="Escriba aqui el c"  
                 />
                 {touched.par3 && errors.par3 && <div className="error" >{errors.par3}</div>}

                 </>
                 :<></>}

                <div class="row">
                <div class=' botones' >
                    <button  type='submit' onClick={handleSubmit}  class="btn btn-primary registrarGuardia Miboton " >Calcular</button>  
                    <button  type='submit' onClick={handleSubmit}  class="btn btn-secondary registrarGuardia Miboton " >Calcular</button> 
                  </div>
                    <br/>
                </div>
              </div>
    </form>
       )}
    </Formik>
    </div> 

    <div className="col-md-6">
      <br/>
      <br/>
    {!successMessage && (
    <div>
      {showSpinner ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border " role="status" style={{ width: '10rem', height: '10rem',borderWidth: '0.5em' }}>
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      ) : hayDatos ? ((
        <>
        <br/>
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
                <th>{Number((dato.nro).toFixed(2))}</th>
                <td>{Number((dato.costTotal).toFixed(2))} {datosLocalStorage[0].tipoDeCambio == 2? "Bs": "$U$"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      
        <br/>
        <p className='miParrafo'>Según la simulación con los datos Ingresados : Número de Trabajadores: <strong>{datosLocalStorage[0].nroTrabajadores}</strong> , Sueldo por hora de los empleados: <strong>{datosLocalStorage[0].sueldo}  {datosLocalStorage[0].tipoDeCambio == 2? "Bs": "$U$"}</strong>, Costo por hora de Espera de los camiones  : <strong>{datosLocalStorage[0].costoEspera} {datosLocalStorage[0].tipoDeCambio == 2? "Bs": "$U$"}</strong>
        </p>
        
        <br/>
        <p ><strong>RESPUESTA :</strong> La cantidad óptima que genera menos gastos en el proceso de descarga de los camiones es de : <strong>{res.nro}</strong>  trabajadores con un monto mínimo de : <strong>{Number((res.costTotal).toFixed(2))} {datosLocalStorage[0].tipoDeCambio == 2? "Bs": "$U$"}</strong> </p>
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
                <th>{Number((dato.nro).toFixed(2))}</th>
                <td>{Number((dato.costTotal).toFixed(2))} {datosLocalStorage[0].tipoDeCambio == 2? "Bs": "$U$"}</td>
              </tr>
            ))}
          </tbody>
    </table>
        <br/>
        <br/>
        <p className='miParrafo'>Según la simulación con los datos Ingresados : Número de Trabajadores: <strong>{datosLocalStorage[0].nroTrabajadores} </strong> , Sueldo por hora de los empleados: <strong>{datosLocalStorage[0].sueldo} {datosLocalStorage[0].tipoDeCambio == 2? "Bs": "$U$"}</strong>, Costo por hora de Espera de los camiones    : <strong>{datosLocalStorage[0].costoEspera} {datosLocalStorage[0].tipoDeCambio == 2? "Bs": "$U$"}</strong>
        </p>
        
        <br/>
        <p ><strong>RESPUESTA :</strong> La cantidad óptima que genera menos gastos en el proceso de descarga de los camiones es de : <strong>{res.nro}</strong>  trabajadores con un monto mínimo de : <strong>{Number((res.costTotal).toFixed(2))} {datosLocalStorage[0].tipoDeCambio == 2? "Bs": "$U$"}</strong> </p>
  </>}
</div>

      </div>
    </div>
  );
};

export default Formulario;