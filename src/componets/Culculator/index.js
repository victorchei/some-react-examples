import React from "react";
import CulcButton from "../CulcButton";
import './style.css';

function getRestStrData(str, number) {
    const isStr = isRestStrData(str);
    let symbol = '';
    let newStr = '';
    if(isStr) { // завжди спереді з симоволом, якщо є остача
        
        const newS = str.slice(String(number).length);
        
        symbol = newS[0];
        newStr = symbol === '-' ? newS : newS.slice(1);
    }                       
    return [symbol, newStr];
}

function isRestStrData(str) {                        
    return str.length > 0 || parseInt(str);
}

function isNumber(number) {                        
    return !!number;
} 

function getExpResult(exp) {
    const arr = {                       
        '+': [],
        '*': 1
    };

    (function divide(arr, str, n = 1) {
        if(!Number(str[0]) && str[0] !== '-') str = str.slice(1);

        const firstNumber = parseInt(str);

        if(!isNumber(firstNumber)) {
            return;
        }

        const [symbol, newStr] = getRestStrData(str, firstNumber);

        const number = Number(arr['*'])*Math.pow(firstNumber, n);

        if(symbol === '+' || symbol === '-') {
            arr['+'].push(number);
            arr['*'] = 1;
            divide(arr, newStr);
            
        } else if (symbol === '*') {
            arr['*'] = number;
            divide(arr, newStr);
        } else if (symbol === '/') {
            arr['*'] = number;
            divide(arr, newStr, -1);
        } else {                        
            arr['+'].push(number);  
            arr['*'] = 1;                          
        }
        return;
    })(arr, exp);

    return arr['+'].reduce((a, b) => a+b);
}

function Culculator() {
    const [ state, setState ] = React.useState({exp: '', result: ''});

    
    const onButtonClick = (classList, text) => {
        switch (classList.value) {
            case 'sum':
                setState((state) => ({...state, result: getExpResult(state.exp)}));
                break;
            case 'reset':
                setState(() => ({exp: '', result: ''}));
                break;
            case 'del':
                setState((state) => {
                    const res = state.exp.slice(0, -1);
                    return {exp: res,  result: res};
                });
                break;
            default:
            setState((state) => {
                const res = state.exp + text;
                return {exp: res,  result: res};
            });
        }
	}

    return (        
      <form id='calc'>
        {/* {console.log(state)} */}
        <div className='result'>{state.result}</div>
        <div className="buttons">
            <CulcButton  onClick={onButtonClick} text='C' cl='del'/>            
            <CulcButton  onClick={onButtonClick} text='SUM' cl='sum'/>
            <CulcButton  onClick={onButtonClick} text='1'/>
            <CulcButton  onClick={onButtonClick} text='2'/>
            <CulcButton  onClick={onButtonClick} text='3'/>
            <CulcButton  onClick={onButtonClick} text='+'/>
            <CulcButton  onClick={onButtonClick} text='4'/>
            <CulcButton  onClick={onButtonClick} text='5'/>
            <CulcButton  onClick={onButtonClick} text='6'/>
            <CulcButton  onClick={onButtonClick} text='-'/>
            <CulcButton  onClick={onButtonClick} text='7'/>
            <CulcButton  onClick={onButtonClick} text='8'/>
            <CulcButton  onClick={onButtonClick} text='9'/>
            <CulcButton  onClick={onButtonClick} text='*'/>
            <CulcButton  onClick={onButtonClick} text='0'/>
            <CulcButton  onClick={onButtonClick} text='.'/>
            <CulcButton  onClick={onButtonClick} text='RESET' cl='reset'/>
            <CulcButton  onClick={onButtonClick} text='/'/>
        </div>            
      </form>
    );
  }
  
  export default Culculator;  