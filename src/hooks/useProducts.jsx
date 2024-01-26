import {getProducts, getProductById, getProductByCategory} from "../services"
import { useState, useEffect } from 'react';
import {doc, getDoc , collection, getDocs, getFirestore} from 'firebase/firestore'

export const useGetProducts = (collectionName = "products") => {
  const [productsData, setProductData] = useState([]);

  // useEffect(() => {
  //   getProducts(limit)
  //   .then(res => setProductData(res.data.products));
  // }, [])

  useEffect(() => {
    const db = getFirestore();
    
    const productsCollection = collection(db, collectionName);

    getDocs(productsCollection).then((snapshot) => {
      setProductData(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
    })

  }, [])




  return {productsData}
}


export const useGetProductById = (collectionName = "products", id) => {

  const db = getFirestore();

  const [productData, setProductData] = useState({});

    useEffect(() => {
      const docRef = doc(db, collectionName, id);

      getDoc(docRef).then((doc) => {
        setProductData({id: doc.id, ...doc.data()})
      })
    }, [id])

    return {productData}
}

export const useGetProductByCategory = (category) => {
  const [productsData, setProductsData] = useState([]);

    useEffect(() => {
      getProductByCategory(category)
      .then(res => {
        return setProductsData(res.data.products)
      })
    }, [category])

    return {productsData}
}