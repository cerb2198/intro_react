//ES EL PUNTO DE PARTIDA DE NUESTRA APLICACION

import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
);

/*
EN LA LINEA 7 LO QUE LE ESTAMOS DICIENDO ES QUE CREE UNA COMUNICACION ENTRE EL ELEMENTO DIV
QUE TIENE POR ID 'root' Y LAS PROPIEDADES DE REACT, ESTO PERMITE QUE REACT PUEDA MANDAR INFORMACION
AL html Y LA VAYA MOSTRANDO A TRAVES DE ESE ELEMENTO DIV
*/

/*
EN LA LINEA 8 A LA 12 BASICAMENTE LE ESTAMOS DICIENDO QUE EN EL DIV CON ID 'root' ME RENDERICE,
ES DECIR ME PINTE UNICAMENTE EL CONTENIDO QUE HAY EN EL COMPONENTEN <Login/>
*/