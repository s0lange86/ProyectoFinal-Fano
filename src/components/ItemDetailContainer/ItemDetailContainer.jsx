import { Card } from 'react-bootstrap';
import ItemQuantitySelector from '../ItemQuantitySelector/ItemQuantitySelector';

const ItemDetailContainer = ({ product }) => {

    return (
        <div className='totalCards-style'>
            <Card key={product.id} style={{ width: "280px", margin: "10px" }}>
                <Card.Img variant="top" src={product.thumbnail} className='imageCard-style' />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                </Card.Body>
                <ItemQuantitySelector />
            </Card>
        </div>
    )
}

export default ItemDetailContainer