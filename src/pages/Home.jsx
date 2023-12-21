import React from 'react'
import { useGetProducts } from '../hooks/useProducts';
import ItemListContainer from '../components/ItemListContainer';

export const Home = () => {
  const { productsData } = useGetProducts(30);

  return (
    <ItemListContainer productsData={productsData}/>
  )
}
