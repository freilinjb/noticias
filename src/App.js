import React,{Fragment, useState} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {
  return (
    <Fragment>
      <Header titulo="Buscador de Noticias"/>

      <div className="container">
        <Formulario/>
      </div>
    </Fragment>
  );
}

export default App;
