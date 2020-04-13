import React, { useState } from 'react';

const useSelect = () => {

    //state del custom hook
    const [state, setState] = useState('');

    const SelectNoticias = () => (

        <div className="form-group">
          <label htmlFor="categoria">Categorias</label>
          <select className="form-control" name="categoria">
            <option value="">--Seleccione--</option>
          </select>
        </div>
    );
        //lo que el ususario seleccione y lo que el usuario va a imprimir
    return [state, SelectNoticias]
}
 
export default useSelect;