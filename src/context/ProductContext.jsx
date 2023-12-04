import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get("https://ormado.webluna.space/api/client/product")
        .then((res)=>{
        console.log(res.data)
        setProduct(res.data.products)
    }) 
    
    .catch((err)=>{
      console.log(err)
    })
    }, []);

    return (
        <ProductContext.Provider value={[product, setProduct]}>
            {props.children}
        </ProductContext.Provider>
    );
};