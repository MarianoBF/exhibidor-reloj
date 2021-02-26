import React, { useContext } from 'react';
import { AppContext } from '../App'


// import {useState} from "react"

// let elegidaAux = 0;
// export const opcionElegida = {elegidaAux}

function SelectorOpciones(props) {

    const {state, dispatch} = useContext(AppContext);

    const changeInputValue = (newValue) => {
        dispatch({ type: 'UPDATE_INPUT', data: newValue,});
    };


// const [elegida, setElegida] = useState(0)

// const elegirOpcion0 = () => {
//     setElegida(0)
//     elegidaAux = elegida
// }

// const elegirOpcion1 = () => {
//     setElegida(1)
//     elegidaAux = elegida
// }

// const elegirOpcion2 = () => {
//     setElegida(2)
//     elegidaAux = elegida
// }

// const elegirOpcion3 = () => {
//     setElegida(3)
//     elegidaAux = elegida
// }

    return(
        <div>
        <ul>
            <li><img onClick={() => changeInputValue(0)} className="imagenSelector" src={props.datos.colorOptions[0].imageUrl} alt={props.datos.colorOptions[0].styleName} /></li>
            <li><img onClick={() => changeInputValue(1)} className="imagenSelector" src={props.datos.colorOptions[1].imageUrl} alt={props.datos.colorOptions[2].styleName} /></li>
            <li><img onClick={() => changeInputValue(2)} className="imagenSelector" src={props.datos.colorOptions[2].imageUrl} alt={props.datos.colorOptions[2].styleName} /></li>
            <li><img onClick={() => changeInputValue(3)} className="imagenSelector" src={props.datos.colorOptions[3].imageUrl} alt={props.datos.colorOptions[3].styleName} /></li>
        </ul>

        <button>{props.datos.featureList[0]}</button>
        <button>{props.datos.featureList[1]}</button>

        </div>
    ) 
}



export default SelectorOpciones

