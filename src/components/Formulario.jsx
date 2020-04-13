import React from 'react';
import styles from './Formulario.module.css';

const Formulario = () => {
    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col-lg-8 col-sm-12">
                <h2 className={styles.heading}>Encuentra Noticias por Categoría</h2>
                {/* styles[] es porque tiene '-' y eso no es estandar de JavaScript por es por eso */}
                <button type="submit" className={`${styles['btn-block']} btn btn-info`}>Submit</button>
            </div>
        </div>
     );
}
 
export default Formulario;