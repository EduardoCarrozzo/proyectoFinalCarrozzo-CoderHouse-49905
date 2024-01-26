import { useContext } from 'react'
import { CartContext } from '../context/CartContext';

const CardWidget = () => {
  
  const {count} = useContext(CartContext);
  
  console.log(count);

  return (
    <div style={{display: 'flex', width: 35, justifyContent: 'space-between', alignItems: 'center'}}>
        🛒 
        {<span style={{fontWeight: 'bold', fontSize: '1.3rem'}}>{count.reduce((acumulador, producto) => acumulador + producto.quantity, 0)}</span>}
    </div>
  )
}

export default CardWidget