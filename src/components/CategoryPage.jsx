import React from 'react'
import Products from './Products'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';

import ClipLoader from "react-spinners/ClipLoader";

const CategoryPage = () => {

  const {id} = useParams();
  const {data, loading} = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`);


  return (
    <div className='px-6 md:px-52'>
      <div className='mt-8 md:mt-10'>
        <div className='text-2xl font-bold'>{data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title}</div>
      </div>
      {
        loading ? <div className='flex justify-center items-center h-[50vh]'>
                    <ClipLoader color={'#000'} loading={loading} size={150} />
                  </div> 
                : <Products innerPage={true} products={data} />
      }
    </div>
  )
}

export default CategoryPage
