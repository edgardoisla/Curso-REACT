import { useState } from 'react';

const ItemCount = ({handleAdd}) => {  // 3) recibo el callback como prop

    const [count, setCount] = useState(1);

    const handleConfirmar=()=>{
        
      handleAdd(count);

    }

  return (
    <div>
        <div className='counter-actions'>
            <button onClick={()=>{setCount(count-1)}}>-</button>
            <p>{count}</p>
            <button onClick={()=>{setCount(count+1)}}>+</button>
        </div>
        <button onClick={handleConfirmar}>Confirmar</button>
    </div>
  )
}

export default ItemCount