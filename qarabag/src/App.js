//React
import React from 'react';
import './App.css';
import Selam from './Selam';
//import ReactDOM from 'react-dom';
//import Apl from './apl';
//import * as serviceWorker from './serviceWorker';

function App() {
    
    /*const selam = () => {
        console.log("Qarabağ Bankı!");
    }*/
    
    return (
        <div className="App">
        <Selam message="Salam əziz dostlar!" name="Puya" />
        </div>
    )
}

export default App;

/*
ReactDOM.render(
    <React.StrictMode>
        <Apl />
    </React.StrictMode>
    documento.getElementById('todosContatos')
);

serviceWorker.unregister();
*/