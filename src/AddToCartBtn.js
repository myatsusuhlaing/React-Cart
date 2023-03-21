import { useState } from "react";
import Button from 'react-bootstrap/Button';

const AddToCartBtn  = () => {

    const [number, setNumber] = useState(1);

    const handleClick = () => {
        
    }

    return (
        
            /* <button onClick={() => handleClick()}>{number}</button> */
            <Button className="addtocart" variant="secondary" size="sm">+Add To Cart</Button>
        
    )
}

export default AddToCartBtn;