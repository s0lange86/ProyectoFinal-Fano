import { Button } from "react-bootstrap"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const AddItemButton = ({label= "Agregar al Carrito", quantity, handleReset}) => {
  
  const { itemCount, setItemCount } = useContext(CartContext)

  const handleAddCart = () =>{
    setItemCount(itemCount + quantity);
    handleReset()
  }
  
  return (
    <div style={{display:'flex', justifyContent:'center', margin:'10px 0'}}>
        <Button onClick={handleAddCart}>{label}</Button>
    </div>
  )
}

export default AddItemButton