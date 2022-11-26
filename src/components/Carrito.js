import React, { useRef, useState } from 'react'
import { db } from './firebase'
import { addDoc, collection, serverTimestamp  } from 'firebase/firestore'

const Carrito = () => {

  //const valorDelContexto = useCarrito()
    const refName = useRef() 
    const refAge = useRef()
    const [id, setId] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const orden = {
            buyer: {
                name: 'Edgardo',
                phone: '1138756515',
            },
            products: [],
            total : 20,
            date : serverTimestamp()
        }

        const ordersCollection = collection(db, 'orders')
        const consulta = addDoc(ordersCollection, orden)

        consulta
            .then((docRef) => {
                
                setId(docRef.id)
            })
            .then((error)=>{
                console.log(error)
            })
    }


    return (
        <div>
            {id ? <p>Tu orden fué generada con éxito, tu id es {id}</p> : null}
            <form onSubmit={handleSubmit}>
                <div>
                    <input ref={refName} type='text' />
                </div>

                <div>
                    <input ref={refAge} type='text' />
                </div>
                <button >guardar</button>
            </form>
        </div>
    )
}

export default Carrito