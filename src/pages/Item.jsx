import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, getDoc, doc } from 'firebase/firestore';

import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'

const Item = () => {

  const [product, setProduct] = useState({});
  const {id} = useParams()

    useEffect(() => {
      
      const db = getFirestore();
      const docRef = doc(db, "products", id);

      getDoc(docRef).then((res) => {
        setProduct({id: res.id, ...res.data()});
      })
      .catch((error) => console.log(error));
    }, [id])


  return (
    <ItemDetailContainer product={product}/>
  )
}

export default Item