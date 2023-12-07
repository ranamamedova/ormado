import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const FaqContext = createContext();

export const FaqProvider = (props) => {
    const [faq, setFaq] = useState([]);

    useEffect(() => {
        axios.get("https://ormadoapi.webluna.org//api/client/faq")
        .then((res)=>{
        console.log(res.data)
        setFaq(res.data.data)
    }) 
    
    .catch((err)=>{
      console.log(err)
    })
    }, []);

    return (
        <FaqContext.Provider value={[faq, setFaq]}>
            {props.children}
        </FaqContext.Provider>
    );
};