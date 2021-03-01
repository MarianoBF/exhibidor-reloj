import React, { useContext } from 'react';
import { AppContext } from '../App'

function SelectorOpciones(props) {


    const {dispatch} = useContext(AppContext);

    const changeInputValue = (newValue, e) => {
        if ( document.getElementsByClassName("imagenSelectorActivo")[0] ) { document.getElementsByClassName("imagenSelectorActivo")[0].classList.remove("imagenSelectorActivo") }
        dispatch({ type: 'UPDATE_INPUT', data: newValue,});
        e.target.classList.toggle("imagenSelectorActivo")
    };

    const changeButton = () => {
        dispatch({ type: "CAMBIAR_BOTON", })
    }

    return(
        <div className="contenedorSelector">
        <ul>
            <li><img onClick={(e) => changeInputValue(0,e)} className="imagenSelector" src={props.datos.colorOptions[0].imageUrl} alt={props.datos.colorOptions[0].styleName} /></li>
            <li><img onClick={(e) => changeInputValue(1,e)} className="imagenSelector" src={props.datos.colorOptions[1].imageUrl} alt={props.datos.colorOptions[2].styleName} /></li>
            <li><img onClick={(e) => changeInputValue(2,e)} className="imagenSelector" src={props.datos.colorOptions[2].imageUrl} alt={props.datos.colorOptions[2].styleName} /></li>
            <li><img onClick={(e) => changeInputValue(3,e)} className="imagenSelector" src={props.datos.colorOptions[3].imageUrl} alt={props.datos.colorOptions[3].styleName} /></li>
        </ul>

        <div className="botonera">
            <button onClick={()=>changeButton()} className="botonesProducto">{props.datos.featureList[0]}</button>
            <button onClick={()=>changeButton()} className="botonesProducto">{props.datos.featureList[1]}</button>
            <button className="botonesProducto">Buy me</button>
        </div>
        </div>
    ) 
}



export default SelectorOpciones

