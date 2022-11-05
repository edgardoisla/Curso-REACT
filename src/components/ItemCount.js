import { useState } from 'react';

const ItemCount = () => {

    const [count, setCount] = useState(0);

    const sumar=()=> {
        setCount(count+1);
    }

    const restar=()=>{
        setCount(count-1);
    }

    const confirmar=()=>{
        
    }

  return (
    <div>
        <div className='counter-actions'>
            <button onClick={sumar}>+</button>
            <p>{count}</p>
            <button onClick={restar}>-</button>
        </div>
        <button onClick={confirmar}>Confirmar</button>
    </div>
  )
}

export default ItemCount