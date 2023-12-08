import React, { useRef } from 'react'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import "./Pdf.css"
import Grafica from '../Grafico/Grafico';
import PdfTablas from './PdfTablas';
const Pdf = () => {
  const pdfRef = useRef(null);
  const res = JSON.parse(localStorage.getItem('res')) || [];
  const datosLocalStorage = JSON.parse(localStorage.getItem('datos')) || [];

  const generarPDF = () => {
    const input = pdfRef.current;

    if (input !== null) {
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save('documento.pdf');
      });
    }
};
     return (
       <div >
            <button onClick={generarPDF}  type="button" class="btn btn-danger btn-lg">
             Descargar PDF&nbsp;
            <i class="far fa-file-pdf fa-lg mr-2"></i> 
            </button><br/><br/>
            <div ref={pdfRef} className='container' style={{ padding: '2rem', display: 'inline-block', backgroundColor: '#f0f0f0' }}>
            <br/><br/>
            <div>
             <h1>Resultados de la simulación para obtner la mejor opción para optimización de costos</h1><br/><br/><br/>
           </div>
          
          
          <p>Una cadena de supermercados es abastecida por un almacén central. La mercancía que
          llega a este almacén es descargada en turnos nocturnos. Los camiones que se descargan en
          este almacén llegan en forma aleatoria de acuerdo a un proceso {datosLocalStorage[0].distribucion ==1 ? "Poisson":"Uniforme"} {datosLocalStorage[0].distribucion == 1 ? "a una razón media de":""} {datosLocalStorage[0].distribucion == 1 ? datosLocalStorage[0].par1 :""}  {datosLocalStorage[0].distribucion == 1 ? "camiones por hora":""}. El tiempo que un equipo de tres trabajadores se tarda en descargar
          un camión, sigue una distribución uniforme entre 20 y 30 minutos. Si el número de
          trabajadores en el equipo se incrementa, entonces, la razón de servicio se incrementa. 
          Cada trabajador recibe {datosLocalStorage[0].sueldo}  {datosLocalStorage[0].tipoDeCambio ==2?"Bs":"$U$"} por hora durante el turno
          nocturno de ocho horas. El costo de tener un camión esperando se estima en {datosLocalStorage[0].costoEspera}  {datosLocalStorage[0].tipoDeCambio == 2?"Bs":"$U$"} por
          hora.
          </p> <br/><br/>
          <div className='containerPdf'>
          <PdfTablas/>
          <br/>
          <Grafica/>
          </div>
          </div>
          </div>
  )
}

export default Pdf