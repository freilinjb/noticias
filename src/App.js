import React,{Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {

  //definir la categoria y noticias
  const [categoria, setCategoria] = useState('');
  const [nocitias, setNocitias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const API = "e79b43651a0a4321b29f3f415029e624";
      const url = `https://newsapi.org/v2/top-headlines?country=mx&apiKey=${API}`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      console.log(noticias.articles);
    }

    consultarAPI();
  },[categoria]);

  return (
    <Fragment>
      <Header titulo="Buscador de Noticias"/>
      <div className="container">
        <Formulario setCategoria={setCategoria}/>
      </div>
    </Fragment>
  );
}

export default App;
