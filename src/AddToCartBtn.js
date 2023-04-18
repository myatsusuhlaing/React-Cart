import { React,useContext,useState } from "react";
import Button from 'react-bootstrap/Button';
import { CardContext } from "./content/CartContent";

const AddToCartBtn  = ({number,setNumber, data}) => {

    const [cartData, setCartData] = useContext(CardContext);

    // const [number, setNumber] = useState(0);

    // const handleClick = () => {
        
    // }

    const addtocart = () => {
        setNumber(number + 1);
        const newData = cartData;
        newData.push(data)
        setCartData(newData);
    }

    return (
        
            /* <button onClick={() => handleClick()}>{number}</button> */
            <Button onClick={() => addtocart()} className="addtocart" variant="secondary" size="sm">+Add To Cart</Button>
        
    )
}

export default AddToCartBtn;