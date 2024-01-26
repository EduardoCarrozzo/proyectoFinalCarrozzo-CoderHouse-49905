import { useState } from "react"
import { Button } from "react-bootstrap"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const ItemCount = ({productId}) => {

    const [countItem, setCountItem] = useState(1)

    const {count, setCount} = useContext(CartContext);
    

    const handleAdd = () => {
        setCountItem(countItem + 1)
    }

    const handleAddProductToCart = () => {
        
        const item = {
            id: productId,
            quantity: countItem
        }
        
        const productFind = count.find(item => item.id === productId)
        if (productFind) {

            const nuevoArray = count.map(item => {
                if (item.id === productId){
                    return {
                        ...item,
                        quantity: item.quantity + countItem
                    }
                }
                return item;
               
            })
            setCount(nuevoArray);
        }else{
            count.push(item)
            setCount(count);
        }

    }

    const handleRemove = () => {
        setCountItem(countItem - 1)
    }

  return (
    <div>
    <div style={{width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: 'auto'}}>
        <Button onClick={handleRemove}>-</Button>
        <span>{countItem}</span>
        <Button onClick={handleAdd}>+</Button>

    </div>
    <Button onClick ={handleAddProductToCart}
        >
            Agregar al carrito</Button>
    </div>
  )
}

export default ItemCount