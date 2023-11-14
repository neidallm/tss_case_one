import { Field, Formik } from 'formik';
import React from 'react'
import  { useState } from 'react';
import "./Formulario.css"
import superMart from '../../Imagenes/descaga.png'

const Formulario = () => {
  const [showSpinner, setShowSpinner] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
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
            costoEspera:values.costoEspera
        },];
        const infoString = JSON.stringify(datos);
        localStorage.setItem('datos', infoString);

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
      ) : (
        <img src={superMart} alt="camion" key={showSpinner} />
      )}
    </div>
  )}
  {successMessage && <p>{successMessage}</p>}
</div>

      </div>
    </div>
  );
};

export default Formulario;