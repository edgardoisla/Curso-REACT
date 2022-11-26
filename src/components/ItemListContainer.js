import React, {useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import {db} from './firebase'
import {collection,getDocs,query,where} from 'firebase/firestore'

const ItemListContainer=()=>{

    const [items, setItems] = useState([])
    const {cat} = useParams()

      
    useEffect(()=>{

        if (cat){

            
            const productosCollection = collection (db,'productos')
            console.log(productosCollection)

            const filtrar = query(productosCollection, where('categoria','==', cat))
            const consulta = getDocs(filtrar)
            
            consulta
                .then((resultado) => {
                    const productos = resultado.docs.map(doc => ({ ...doc.data(), id: doc.id }))
                    setItems(productos)
                })
                .catch((error) => {
                    console.log(error)
                })

        }  else{
            const productosCollection = collection (db,'productos')
            const consulta = getDocs(productosCollection)

            consulta
                .then((resultado) => {
                    const productos = resultado.docs.map(doc => ({ ...doc.data(), id: doc.id }))
                    setItems(productos)
                })
                .catch((error) => {
                    console.log(error)
              })
        }
    },[cat])

    return (
        
        <div>
            <h2>Productos</h2>
            {items.length === 0 ? <p>Cargando...</p> : <ItemList items ={items}/>}
        </div>
            
    )
}

export default ItemListContainer