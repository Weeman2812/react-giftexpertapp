import React , { useState } from "react";

import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/gifGrid";



export const GifExpertApp = () => {
/*a continuacion voy a crear una lista para poder mostar en pantalla
creo una constante con un arreglo*/
// const categories =['One Punch','Samurai x','Dragon Ball'];
/*comente la linea de arriba para poder crear abajo un hook o useState
para poder crear un button donde agregue categorias con un butto*/
const [categories, setCategories] = useState(['pickle rick']);

//  const handleAdd = ()=>{
//  setCategories (categories => [...categories,'HunterxHunter'])
// /* creo un nuevo arreglo y le agrego las propiedades anteriores del arreglo con ...(los tres puntos)
// y le incorporo el nuevo nombre(HUNTERXHUNTER)
// hago un nuevo callback dentro del setCategories*/

// }

/* el OL es una orden list donde puedo poner todas las categorias 
anteriores de la lista que quiero crear*/
    return (
        <>

        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories} />

        <hr/>

   

        <ol> 
          { 
            categories.map( category =>(
            <GifGrid
            key = {category}
            category={category}
            />
            ))
          }
        </ol>
        </>


    );
    

        }      
export default GifExpertApp;

        /* en categories.map se recibe el arreglo
        que se mapea y devuelve un nuevo arreglo, en este se agrega
        el nuevo componente(GIFGIRD) que va a ser el encargado de recibir
        la categoria y el key para devolver lo que se busca en una peticion
        html*/