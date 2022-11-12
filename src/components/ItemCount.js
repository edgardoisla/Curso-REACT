import { useState } from 'react';

const ItemCount = () => {

    const [count, setCount] = useState(0);

    const confirmar=()=>{
        
    }

  return (
    <div>
        <div className='counter-actions'>
            <button onClick={()=>{setCount(count-1)}}>-</button>
            <p>{count}</p>
            <button onClick={()=>{setCount(count+1)}}>+</button>
        </div>
        <button onClick={confirmar}>Confirmar</button>
    </div>
  )
}

export default ItemCount