import React, { useContext, useState, useEffect, useMemo } from 'react';
import { AppContext } from '../App'
import ImagenProducto from "./ImagenProducto.js"

function Producto(props) {


    const {state} = useContext(AppContext);
    const [fecha, setFecha] = useState(0)
    const corazon = "80 BPM"

    const ImagenMemorizada = useMemo(()=><ImagenProducto datos={props.datos} />,[props.datos])


    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            setFecha(date.toLocaleTimeString());
            },
            1000
          );
        return () => { clearInterval(interval)}
    },)


    return(
        <div className="contenedorGeneralProducto">
            <h1>{props.datos.title}</h1>
            <p>{props.datos.description}</p>
            <div className="contenedorImagenProducto">
                {ImagenMemorizada}
                <p className="fecha">{state.boton ? fecha : corazon}</p>
            </div>
        </div>
    )
}
export default Producto