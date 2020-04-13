import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';

const Formulario = ({setCategoria}) => {

    const OPCIONES = [
        { value: 'general', label:'General'},
        { value: 'business', label:'Neogocios'},
        { value: 'entertainment', label:'Entretenimiento'},
        { value: 'health', label:'Salud'},
        { value: 'sports', label:'Deportes'},
        { value: 'technology', label:'Tecnologia'}
    ]

    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);

    //submit al form, pasar categoria a app.js
    const buscarNoticias = e => {
        e.preventDefault();

        setCategoria(categoria);        
    }

    return ( 
        <div className={`${styles.buscador} row justify-content-center`}>
            <div className="col-lg-8 col-sm-12">
                <form onSubmit={buscarNoticias}>
                <h2 className={styles.heading}>Encuentra Noticias por Categoría</h2>

                    <SelectNoticias/>
                    {/* styles[] es porque tiene '-' y eso no es estandar de JavaScript por es por eso */}
                    <button type="submit" className={`${styles['btn-block']} btn btn-info`}>Buscar</button>
                </form>
            </div>
        </div>
     );
}

Formulario.propTypes = {
    setCategoria: PropTypes.func.isRequired
}
 
export default Formulario;