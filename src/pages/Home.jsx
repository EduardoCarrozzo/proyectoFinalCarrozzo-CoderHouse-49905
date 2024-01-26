import React from 'react'
import { useGetProducts } from '../hooks/useProducts';
import ItemListContainer from '../components/ItemListContainer';

export const Home = () => {
  const { productsData } = useGetProducts();

  return (
    <ItemListContainer productsData={productsData}/>
  )
}
