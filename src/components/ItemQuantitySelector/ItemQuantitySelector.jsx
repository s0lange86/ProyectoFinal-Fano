import { useState } from "react"
import { Button } from "react-bootstrap"

import AddItemButton from "../AddItemButton/AddItemButton"
import './ItemQuantitySelector.css'

const ItemQuantitySelector = () => {
    const [quantity, setQuantity] = useState(1);

    const handleAddProduct = () =>{
        setQuantity(quantity +1);
    }   

    const handleSubstractProduct = () =>{
        if (quantity > 1){
            setQuantity(quantity -1);
        }
    }

    const handleReset = () =>{
        setQuantity(1);
    }

  return (
    <div>
        <div style={{margin:'0 10px', display:'flex', justifyContent:'center'}}>
        <Button className='button-addRemove' onClick={handleSubstractProduct}>-</Button>
        <input className="input-product-style" type="number" value={quantity} disabled/>
        <Button className='button-addRemove' onClick={handleAddProduct}>+</Button>
        </div>
        <AddItemButton quantity={quantity} handleReset={handleReset}/>
    </div>
  )
}

export default ItemQuantitySelector