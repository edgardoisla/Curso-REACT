import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import {db} from './firebase'
import {collection,doc,getDoc} from 'firebase/firestore'


const ItemDetailContainer = () => {

    const [item, setItem] = useState({})

    const {id} = useParams()

    useEffect(() =>{
      const productosCollection = collection(db, 'productos')
      const ref = doc(productosCollection,id) 
      const consulta = getDoc(ref)

      consulta
      .then(response=>{
          setItem(response.data())
      })
      .catch(error=>{
          console.log(error)
      })
  },)

      return (
        <ItemDetail producto={{id,...item}}/>
      )
    
  }

  
export default ItemDetailContainer