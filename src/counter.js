import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Button from 'react-bootstrap/Button';

// const Counter = ({ count, setCount }) => {
    const Counter =() =>{
    const [count, setCount] = useState(1);
    return (
        <>
            <Button onClick={() => (setCount(count + 1))} variant="secondary" size="sm">
                <AiOutlinePlus size={15} />
            </Button>
            <span className='countNum'>{count}</span>

            <Button onClick={() => (setCount(count - 1))} disabled={count === 1} variant="secondary" size="sm">
                <AiOutlineMinus size={15} />
            </Button>
        </>
    )
    }
export default Counter;