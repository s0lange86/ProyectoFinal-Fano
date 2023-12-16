import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDocs, getFirestore, collection, query, where } from 'firebase/firestore';

import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

const Category = () => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        
        const db = getFirestore();
        const collectionRef = collection(db, "products");

        const categoryQuery = query(collectionRef, where("category", "==", categoryId))

        getDocs(categoryQuery).then((res) => {
            const data = res.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setProducts(data);
        }).catch((error) => console.log(error));
    }, [categoryId])


    return (
        <ItemListContainer products={products} />
    )
}

export default Category