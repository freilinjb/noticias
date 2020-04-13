import React,{Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  //definir la categoria y noticias
  const [categoria, setCategoria] = useState('');
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const API = "e79b43651a0a4321b29f3f415029e624";
      const url = `https://newsapi.org/v2/top-headlines?country=mx&apiKey=${API}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      setNoticias(resultado.articles);
    }

    consultarAPI();
  },[categoria]);

  return (
    <Fragment>
      <Header titulo="Buscador de Noticias"/>
      <div className="container">
        <Formulario setCategoria={setCategoria}/>
        <ListadoNoticias noticias={noticias}/>
      </div>
    </Fragment>
  );
}

export default App;
