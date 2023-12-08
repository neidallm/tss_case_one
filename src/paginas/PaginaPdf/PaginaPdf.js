import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Pdf from '../../components/Pdf/Pdf';
const PaginaPdf = () => {
    const datosLocalStorage = JSON.parse(localStorage.getItem('datos')) || [];
    const hayDatos = datosLocalStorage.length > 0;
  return (
    <div>
      <Header />
      <div>        
          {hayDatos ? (
              <div >
              <Pdf/>

              </div>
            ) : (
              <>
              <div className='container '>
                <h1 style={{ color: "#3388af", fontSize: "42px", padding:"3rem" }}>No hay datos para imprimir</h1>
              </div>
              </>
            )}
        </div>
      <Footer />
    </div>
  );
};

export default PaginaPdf;