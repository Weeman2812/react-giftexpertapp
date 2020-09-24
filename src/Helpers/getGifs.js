
export const  getGifs = async( category) =>{
    /* es una funcion de flecha que hace la peticion para la categotia*/
        const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=0SgFOf26UV41dvU4u0QVSDzXs0i84zkh`
    /* la constante url sale de postman,  entro a la pagina giphy 
    entro a la parte de search Endpoint y copio el url, esto lo pego en postman
    y cuando me pide el api key lo ingreso y luego le pongo una busqueda
    de algo ej rick and morty, despues que hago el send copio el url y lo pego en 
    esta constante*/
           const resp= await fetch(url);
    /*Fetch proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, tales como peticiones y respuestas. 
    También provee un método global fetch() que proporciona una forma fácil y 
    lógica de obtener recursos de forma asíncrona por la red*/
            const { data }= await resp.json();//es .json por que es el formato de la info que recibe el url
      /* la constante gifs saca de la data.map un nuevo arreglo y me devuelbe
      solo los datos que necesito, el id, el title y el  url
      el ID es img.id por que esta alojado en img*/
            const gifs = data.map(img =>{
                return {
                    id: img.id,
                    title: img.title,
                    url : img.images?.downsized_medium.url
                }
            })
      
     return gifs;
     
      
        }