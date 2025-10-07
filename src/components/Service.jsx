import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../context/GlobalContext'


function Service() {
    const { addNewService,state } = useContext(GlobalContext) // hay que traer tambien el state para poder renderizar
    const [data,setData] = useState({name: "",price :""})
    
    const handleInput  = (ev) => {
        ev.target.id
        setData({
            ...data,
            [ev.target.id]: ev.target.value
        })
    }
    const handleClick = (ev) => {
        ev.preventDefault()
        addNewService(data)
    }



  return (
    <>
        <form action="">
            <input type="text" placeholder='name' id="name" onChange={handleInput}/>
            <input type="number" placeholder='price' id="price" onChange={handleInput}/>
            <button onClick={handleClick}> Añadir </button>
        </form>
        {state.services.map(item => <p>{item.name} - {item.price}</p>)}

    </>
  )
}

export default Service
        