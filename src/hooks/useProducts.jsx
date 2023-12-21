import {getProducts, getProductById, getProductByCategory} from "../services"
import { useState, useEffect } from 'react';


export const useGetProducts = (limit = 10) => {
  const [productsData, setProductData] = useState([]);

  useEffect(() => {
    getProducts(limit)
    .then(res => setProductData(res.data.products));
  }, [])

  return {productsData}
}


export const useGetProductById = (id) => {
  const [productData, setProductData] = useState({});

    useEffect(() => {
      getProductById(id)
      .then(res => {
        return setProductData(res.data)
      })
    }, [])

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