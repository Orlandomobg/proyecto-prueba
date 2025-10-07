import { createContext, useReducer } from "react";

// crear un contexto

//exportar y crear
export const GlobalContext = createContext()

//definir variable del contexto
//en lista global guardamos lo que se use en todos los sitios
const initialState = {
    users:[],
    services:[],
    authToken: null,

}

// despues de que tengas el objeto se usa el useReducer
// es la evolcion del useState

//se puede tener muchos arrays objetos, uno dentro de otro, se puede trabajar con estados mas complejos
//OJO: se puede usar esto.

//.- para crear superestado.

// use reducer se maneja con funciones (dos parametros.... 1 estado, 2 un objeto)
function globalReducer(state,action){
    //action:{type:"addUser",payload :{} (contiene datos que se necesitan usar en caso)} 


    // se hace un switch: evalua una igualdad
    switch (action.type ){ //type. el tipo de caso que quieres ejecutar
        case "ADDUSER": //siempre en mayuscula
            //si es objeto se suele hacer return
            return{
                ...state,// se usa spread operator
                users:[...state.users,action.payload]
            }

        //case "addServices":
        case "ADDSERVICES": //siempre en mayuscula
            //si es objeto se suele hacer return
            return{
                ...state,// se usa spread operator
                services:[...state.services,action.payload]
            }

        //case "addToken":
    }

    
}

// ahora hacemos provider del context
// se exporta

export const GlobalProvider = ({children}) =>{ // se le pone un children que se pone en app
    
    const [state,dispatch] = useReducer(globalReducer,initialState) //dispatch es el que se encarga de ejecutar la action que quieres ejecutar que le dices,dispara los casos de la funcion GlobalReducer 

    //aqui es donde vamos a meter la funciones
    const addNewUser = (user) =>{ // recibimos a user por parametro
        dispatch({type:"ADDUSER",payload :user}) // type:caso que quieres ejecutar, payload:user
    }

    const addNewService = (service) =>{ // recibimos a user por parametro
    dispatch({type:"ADDSERVICES",payload :service}) // type:caso que quieres ejecutar, payload:user
    }

    return<GlobalContext.Provider value = {{state, addNewUser, addNewService}} v>
        {children}
    </GlobalContext.Provider>
} // ya se tiene el contexto hecho
//ahora se lleva a main
    

// ejercicios
// modificar el contexto al servicio
//componente nuevo nombre y precio y añadimos el servicio nuevo
// pedir nombre y precio
//renderizar la lista de servicios que estan

// hacer ahora el render  que es publicar la pagina