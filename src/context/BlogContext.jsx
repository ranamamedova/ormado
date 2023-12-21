import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const BlogContext = createContext();

export const BlogProvider = (props) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get("https://ormadoapi.webluna.org/api/client/blog")
        .then((res)=>{ 
        console.log(res.data,"BLOG")
        setProduct(res.data.data)
    }) 
    
    .catch((err)=>{
      console.log(err)
    })
    }, []);

    return (
        <BlogContext.Provider value={[product, setProduct]}>
            {props.children}
        </BlogContext.Provider>
    );
};