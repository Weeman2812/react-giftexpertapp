import React from 'react';
import { useFechGifs } from '../hooks/useFechGifs';
 import { GifGridItem } from './GifGridItem';
// // /*creamos un nuevo componente que reciba el html y busque 
// la imagen mandada en la category*/


export const GifGrid = ({category}) => {
// transformo la funcion getGifs en async para poder usar el await
    //  const [images, setImages] = useState([])
const {data:images, loading} = useFechGifs(category);
   
/*el useEfect lo que hace es que la funcion tenga una dependencia 
para poder inicializarce, en este caso inicializa el getGifs una sola
vez por que dentro del [] lo dejo vacio
sino tendria que mandar un argumento para que la vuelva a inicializar*/



    
    return (
        <>
        <h3 className = "animate__animated animate__flash">{category}</h3> 

        {loading && <p className = "animate__animated animate__flash">LOADING</p>}
        
         <div className="card-grid">
        
            <ol>
                {
                    images.map( img => (
                        <GifGridItem 
                        key={img.id}
                        {...img} 

                        />

                    ))
            
                }

        
            </ol>  
        </div>
        </> 
    )
}
