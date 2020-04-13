import React from 'react';
import PropTypes from 'prop-types';


const Noticia = ({noticia}) => {

    const { urlToImage, url, title, description, source } = noticia;

    const imagen = (urlToImage) ? 
        <div>
            <img className="card-img-top" src={urlToImage} alt={title}/>
            <span className="card-title">{source.name}</span>
        </div>

    : null; 
    
    return ( 
        <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="card text-left">
            { imagen }
              <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{description}</p>
                <a href={url} className="waves-effect waves-light btn btn-primary" 
                target="_black"
                rel="noopener noreferrer">Ver Noticia Completa</a>
              </div>
            </div>
        </div>
     );
}

Noticia.propTypes = {
  noticia: PropTypes.object.isRequired
}
 
export default Noticia;