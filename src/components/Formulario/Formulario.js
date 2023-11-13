import { Field, Formik } from 'formik';
import React from 'react'
import "./Formulario.css"

const Formulario = () => {
  return (
    <div>
        <div className='container'>
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
    onSubmit={(values)=>{
        console.log(values);
        const datos = {
            nroTrabajadores:values.nroTrabajadores,
            sueldo:values.sueldo,
            costoEspera:values.costoEspera
        }
        const infoString = JSON.stringify(datos);
        localStorage.setItem('datos', infoString);
    }}
> 
      
       {({ values, errors, touched, handleSubmit,})=>(
        <form >
        {console.log(errors)}
        {/* {console.log(values)} */}
        <div class="container">
          <div class="row">
            <div class="col hw">
               <h5 className='titulo'>Registro datos del guardia</h5>
                   
                              

                 <label htmlFor='nroTrabajadores'>nroTrabajadores</label>
                 <Field 
                 type="number" 
                 class="form-control"  
                 id='nroTrabajadores' name='nroTrabajadores'  
                 placeholder="Escriba aqui el nroTrabajadores"  
                />
                 {touched.nroTrabajadores && errors.nroTrabajadores && <div className="error" >{errors.nroTrabajadores}</div>}


                 <label htmlFor='sueldo'>sueldo</label>
                 <Field 
                 type="number" 
                 class="form-control"  
                 id='sueldo' name='sueldo'  
                 placeholder="Escriba aqui el sueldo"  
                />
                 {touched.sueldo && errors.sueldo && <div className="error" >{errors.sueldo}</div>}
            
                 <label htmlFor='costoEspera'>costoEspera</label>
                 <Field 
                 type="number" 
                 class="form-control"  
                 id='costoEspera' name='costoEspera'  
                 placeholder="Escriba aqui el costoEspera"  
                />
                 {touched.costoEspera && errors.costoEspera && <div className="error" >{errors.costoEspera}</div>}
            </div>
            <div class="row">
                <div class='text-center botones' >
                  <button  type='submit' onClick={handleSubmit}  class="btn btn-secondary registrarGuardia" >Calcular</button> 
                </div>
              </div>
              </div>
         </div>
    </form>
       )}
    </Formik>
        </div>
    </div>
  )
}

export default Formulario