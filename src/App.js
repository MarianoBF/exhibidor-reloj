import './App.css';
import React, { useReducer } from "react"
import ProductData from "./components/ProductData"
import Producto from "./components/Producto"
import Comprar from "./components/Comprar"
import SelectorOpciones from "./components/SelectorOpciones"


export const AppContext = React.createContext();

const initialState = {

  inputText: 0,

};


function reducer(state, action) {
  switch (action.type) {

      case 'UPDATE_INPUT':
          return {
              inputText: action.data
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
      <Comprar textoCompra={"Comprame!"}/>
    </AppContext.Provider>
  </div>  
  );
}

export default App;
