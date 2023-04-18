import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Button from 'react-bootstrap/Button';

// const Counter = ({ count, setCount }) => {
    const Counter =({qty, setQty}) =>{

    return (
        <>
            <Button onClick={() => (setQty(qty + 1))} variant="secondary" size="sm">
                <AiOutlinePlus size={15} />
            </Button>
            <span className='countNum'>{qty}</span>
            <Button onClick={() => (setQty(qty - 1))} disabled={qty === 1} variant="secondary" size="sm">
                <AiOutlineMinus size={15} />
            </Button>
        </>
    )
    }
export default Counter;