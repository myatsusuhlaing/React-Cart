import React, { createContext, useState } from "react";

export const CardContext = createContext();

const CardContent = ({children}) => {
    const [cartData, setCartData] = useState([]);

    return(
        <CardContext.Provider value={[cartData, setCartData]}>
            {children}
        </CardContext.Provider>
    )
}

export default CardContent