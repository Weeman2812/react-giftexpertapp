import { useEffect, useState } from "react";
import { getGifs } from "../Helpers/getGifs";

// esto es un customHook, se puede crear con el rafc pero se 
// borra todo el codigo html y el ReactDOM por que no hay jsx
export const useFechGifs = (category) => {
    
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(()=>{
        getGifs(category)
        .then(imgs =>{

            setTimeout(()=> {

                  setstate({
                data: imgs,
                loading: false
            });

            },3000 )

          
        })

    }, [category])
    
return state; //regreso la data y el loading


}
