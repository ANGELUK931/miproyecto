import React from "react";
import { useState } from "react";
import './Button.css';

interface Datos{
    texto: string;
    color: string;
}
function Button({texto, color}:Datos){
    const [contador, setContador] = useState(0);
    const nombre = `mi-boton ${color}`;
    const [gatoState, setGatoState] = useState('-');
    const gato = ()=>{
        setGatoState(variable=>{
            if(variable == '-')return 'X';
            if(variable == 'X')return 'O';
            return '-';
        });
    }
    const sumar = ()=>{
        setContador(variable=>{
            return (variable+1);
        });
    };
    return(
        <div onClick={gato} className={nombre}>
            {gatoState}
        </div>
        
    )
}
export default Button;