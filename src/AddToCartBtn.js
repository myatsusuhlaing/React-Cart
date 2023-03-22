import { React,useState } from "react";
import Button from 'react-bootstrap/Button';

const AddToCartBtn  = ({number,setNumber}) => {

    // const [number, setNumber] = useState(0);

    // const handleClick = () => {
        
    // }

    return (
        
            /* <button onClick={() => handleClick()}>{number}</button> */
            <Button onClick={() => (setNumber(number + 1))} className="addtocart" variant="secondary" size="sm">+Add To Cart</Button>
        
    )
}

export default AddToCartBtn;