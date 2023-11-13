import React from 'react';

const TablaRes = () => {
  // Obtener datos del localStorage
 const datosLocalStorage = JSON.parse(localStorage.getItem('datos')) || [];
 
 console.log(datosLocalStorage);
  // Condición para verificar si hay datos en el localStorage
 const hayDatos = datosLocalStorage.length > 0;
 console.log(hayDatos);

  return (
    <div className='container'>
      <h1>Tabla de Resultados</h1>
      {hayDatos ? (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Horas</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {/* Lógica para renderizar filas de la tabla según los datos del localStorage */}
            {datosLocalStorage.map((dato, index) => (
              <tr key={index}>
                <th scope="row">{dato.horas}</th>
                <td>{dato.first}</td>
                <td>{dato.last}</td>
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
