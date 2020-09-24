import React, { useState } from 'react'
import PropTypes from 'prop-types'
// para hacer mas rapido el componente pone rafc
/*el input es una caja de texto, y el type se le pone para 
el tipo de dato para agregar */



export const AddCategory = ({setCategories}) => {

/*creo un hook(useState) para poder enviar un valor al input
*/
const [inputValue, setInputValue] = useState('')

const  handleInputChange = (e)=> {
 /*esta funcion recibe el (e) que es un evento que lo que 
 hace con ese evento es cambiarlo en el onChange del input

 */   
    setInputValue(e.target.value) ;
/*esta funcion es el useState que toma el evento que se manda
al onchange y lo renderiza con un nuevo valor 
*/
}
const handleSubmit = (e)=>{
e.preventDefault();

if(inputValue.trim().length > 2){
    setCategories(categories => [inputValue,...categories]);
    setInputValue('');

}

}
/*el handleSubmit se encarha de tomar el nuevo elemento 
y cargarlo dentro del formulario
y el preventDefault lo que hace es tomar el elemento y evitar
que se recargue el navegador
*/
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                 value= {inputValue}
                 onChange={(handleInputChange)}
            />

        </form>
            
    )
}

AddCategory.propTypes = {
setCategories : PropTypes.func.isRequired
}
/*el onChange se utiliza para poder cambiar le input
agrego el input dentro de un form por eso elimino el fragment<>

*/