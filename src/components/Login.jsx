import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'

function Login() {
    //para hacer uso de funcion addNewUser del globalContext aqui es donde lo llamas
    // cada vez que quieres usar el contexto siempre llevar el useContext
    const { addNewUser } = useContext(GlobalContext)

    const userFake= {
        name:"anacleta",
        email:"ana@gmail.com"
    }

    // aqui ya actua
    const handleClick =(ev) =>{
        ev.preventDefault()
        addNewUser(userFake)
    }

  return (
    <div>
        <button onClick={handleClick} >Añadir Usuario</button>
    </div>
  )
}

export default Login