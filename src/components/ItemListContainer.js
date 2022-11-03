import React, {useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import {getProductByCategoryId, getProducts} from './utils'



const ItemListContainer=()=>{

    const [items, setItems] = useState([])
    const {cat} = useParams()

      
    useEffect(()=>{
        console.log(cat)
        if (cat){

            getProductByCategoryId(cat)
            .then(response=>{
                setItems(response)

            })
            .catch((error) =>{
                
            })

        }  else{
            getProducts()
              .then((response)=>{
                  setItems(response)
              })
              .catch((error) =>{ 
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