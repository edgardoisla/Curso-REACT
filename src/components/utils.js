import { randProduct } from '@ngneat/falso';

let stockProductos = []

for (let i = 0; i < 10; i++){
    stockProductos.push(randProduct())
}

export const getProducts = ()=>{
    


    let pedido = new Promise((resolve) => {
        setTimeout(()=>{
            resolve(stockProductos)
        },2000)
        
    })

    return pedido
}

export const getProductByCategoryId = (id) =>{

    let pedido = new Promise((resolve) => {
        setTimeout(()=>{
            resolve(stockProductos.filter(item=>item.category === id))
        },2000)
        
    })
    return pedido
}
