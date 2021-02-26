import React, { useContext } from 'react';
import { AppContext } from '../App'

// import opcionElegida from "./SelectorOpciones"


function Producto(props) {

    const {state, dispatch} = useContext(AppContext);

    const changeInputValue = (newValue) => {

        dispatch({ type: 'UPDATE_INPUT', data: newValue,});
    };

    return(
        <div>
            <h1>{props.datos.title}</h1>
            <p>{props.datos.description}</p>
            <img className="imagenProducto" src={props.datos.colorOptions[state.inputText].imageUrl} alt="Product"/>
        </div>
    )
}
export default Producto