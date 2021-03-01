import React, { useContext } from 'react';
import { AppContext } from '../App'

function ImagenProducto(props) {

    const {state} = useContext(AppContext);


    return(
        <>
        {console.log(state.modeloMostrado)}
            <img className="imagenProducto" src={props.datos.colorOptions[state.modeloMostrado].imageUrl} alt="Product"/>
        </>
    )
}
export default ImagenProducto