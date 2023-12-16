import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ItemListContainer.css';

const ItemListContainer = ({ products }) => {
    return (
        <div className='totalCards-style'>
            {products.map((product) => {
                return (
                    <Card key={product.id} style={{ width: "280px", margin: "10px", height: "550px" }}>                        
                        <Link to={`/item/${product.id}`}><Card.Img variant="top" src={product.thumbnail} /></Link>                    
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                        </Card.Body>
                    </Card>
                );
            })}
        </div>
    )
}

export default ItemListContainer