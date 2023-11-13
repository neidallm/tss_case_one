import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import LandingPage from './paginas/LandingPage/LandingPage';
import Calcular from './paginas/Calcular/Calcular';
import Graficos from './paginas/Graficos/Graficos';
import Tablas from './paginas/Tablas/Tablas';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
             <Route path="/Calcular" element={<Calcular/>}/>
             <Route path="/Graficos" element={<Graficos/>}/>
             <Route path="/Tablas" element={<Tablas/>}/>
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
