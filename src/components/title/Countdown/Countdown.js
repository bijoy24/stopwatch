import React from 'react'
import './Digit/Digit'
import Digit from './Digit/Digit'

const Countdown =(props)=>{
    return (
        <div className ="d-flex my-5 p-2">
            <Digit color ="green" value ={props.value.min}></Digit>
            <Digit color ="blue" value ={props.value.sec}></Digit>
            <Digit color ="red" value ={props.value.mili}></Digit>
        </div>
    );
}
export default Countdown