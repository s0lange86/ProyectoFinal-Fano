// import axios from 'axios';
import { useEffect, useState } from 'react';
import { getDocs, getFirestore, collection } from 'firebase/firestore';

import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        const db = getFirestore();
        const collectionRef = collection(db, "products");

        getDocs(collectionRef).then((res) => {
            const data = res.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),  
            }));
            setProducts(data);
        })
        .catch((error) => console.log(error));
    }, [])

    return (
        <ItemListContainer products={products} />
    );
};

export default Home