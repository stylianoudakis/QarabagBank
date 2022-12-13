import React, {useInsertionEffect, useState} from 'react';

function Selam({message, name}) {

    const [counter, setCounter] = useState(0);

    useInsertionEffect( () => {
        console.log("Yeni müştəri");
    },[counter]);

        const selam = () => {

        console.log("Salam, hörmətli müştəri!");

    }

    const increment = () => {
        setCounter(counter +1);
    }

    return (

    <div>
        <h3>{message}</h3>
        <h2>{name}</h2>
        <button onClick={selam}>Chamar atendimento</button><br></br>
        <button onClick={increment}>Escolha um número</button>
        <h1>{counter}</h1>
    </div>
    )
}

export default Selam;