import './App.css';
import React, { useReducer } from "react"
import ProductData from "./components/ProductData"
import Producto from "./components/Producto"
import SelectorOpciones from "./components/SelectorOpciones"


export const AppContext = React.createContext();

const initialState = {
  modeloMostrado: 0,
  boton: true,
};

function reducer(state, action) {
  switch (action.type) {

      case 'UPDATE_INPUT':
          return {
              ...state,
              modeloMostrado: action.data,
          };

      case 'CAMBIAR_BOTON':
        return {
          ...state,
          boton: !state.boton,
        };
  

      default:
          return initialState;
  }
}


function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
  <div className="contenedorPrincipal">
    <AppContext.Provider value={{ state, dispatch}}>
      <Producto datos={ProductData} />
      <SelectorOpciones datos={ProductData}/>
    </AppContext.Provider>
  </div>  
  );
}

export default App;
