import React, { useState } from 'react';

const useSelect = (stateInicial, opciones) => {

    //state del custom hook
    const [state, setState] = useState(stateInicial);
    //state es el valor por defecto
    const SelectNoticias = () => (

        <div className="form-group">
          <label htmlFor="categoria">Categorias</label>
          <select className="form-control" name="categoria" value={state} onChange={ e => setState(e.target.value) }> 
            {opciones.map(opcion => (
                <option key={opcion.value} value={opcion.value}> {opcion.label} </option>
            ))}
          </select>
        </div>
    );
        //lo que el ususario seleccione y lo que el usuario va a imprimir
    return [state, SelectNoticias]
}
 
export default useSelect;