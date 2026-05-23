import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productsAction } from '../redux/actions/products';
import ProductItems from '../components/ProductItems';
import { searchAction } from '../redux/actions/search';
import Slider from '../components/Slider';


function Home() {
  const dispatch = useDispatch();
  const{products} = useSelector(state=> state.products);
  const{search} = useSelector(state=> state.search);
  useEffect(()=>{
    dispatch(productsAction())
    dispatch(searchAction())
  },[dispatch])
  
  const displayProducts = search.length > 0 ? search : products;
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <Slider/>
      <div className='px-4 md:px-8 lg:px-12 py-12'>
        <div className='max-w-7xl mx-auto'>
          <div className='mb-8'>
            <h2 className='text-2xl md:text-4xl font-bold mb-2'>Our Products</h2>
            <p className='text-gray-600'>Discover our amazing collection of quality products</p>
          </div>
          
          {displayProducts && displayProducts.length > 0 ? (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>    
              {displayProducts.map((val,i)=>(
                <ProductItems key={i} val={val}/>
              ))}
            </div>
          ) : (
            <div className='text-center py-16'>
              <p className='text-gray-600 text-lg'>No products found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home