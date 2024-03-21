import { useState } from "react"


export const useCounter  = (initialValue = 10) => {
    
    const [ counter, setCounter ] = useState(initialValue);
    
    const incremet =( value = 1)=>{
        setCounter( ( current )=> current + value) ;
    }
    const decrement =( value = 1)=>{
        setCounter( ( current )=>  current - value);
    }
    const rest =()=>{
        setCounter( initialValue );
    }

    return{
        counter,
        rest,
        incremet, 
        decrement
    }
}