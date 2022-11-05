import { randProduct } from '@ngneat/falso';

let stockProductos = []

for (let i = 0; i < 10; i++){
    stockProductos.push(randProduct())
}

const generatePromise = (op,time = 2000) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(op)
        },time)
    })

}

    export const getProducts = ()=> generatePromise(stockProductos)

    export const getProductByCategoryId = (id) => generatePromise(stockProductos.filter(item=>item.category===id))
        
    

