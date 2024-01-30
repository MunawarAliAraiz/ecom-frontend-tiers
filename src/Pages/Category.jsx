import React, {useState,useContext} from 'react'
import { ShopContext } from '../Context/ShopContext'
import { IconButton } from "@material-tailwind/react";
import Item from '../Components/Item/Item'


const Category = (props) => {

  const { all_product } = useContext(ShopContext)
  const [currentPage, setCurrentPage] = useState(1);
  
  const category_products = all_product.filter((Item)=>Item.category===props.category);
  const productsPerPage = Math.min( 8 , Math.max(category_products.length,1));

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = category_products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <img className='block my-2 md:my-7 mx-auto w-full md:w-4/5' src={props.banner} alt="" />
      {/* Index Sort */}
      <div className='flex my-0 mx-5 md:mx-40 justify-between items-center font-bold'>
        <p className='mb-2'>Showing products {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, category_products.length)} of {category_products.length}</p>
        {/* Sort */}
        <div className='flex items-center gap-1 px-3 py-2 md:px-5 rounded-3xl border-2 cursor-pointer'>
          Sort by 
          <IconButton variant='text' className="rounded-full">
            <i className="fa fa-chevron-down"></i>
          </IconButton>
        </div>
      </div>
      {/* Products */}
      <div className='my-5 mx-5 md:mx-40 grid grid-cols-2 md:grid-cols-4 gap-y-20 gap-x-5'>
        {currentProducts.map((product, index) => {
            return <Item key={index} id={product.id} image={product.image} name={product.name} new_price={product.new_price} old_price={product.old_price} category={product.category} />
        })}
      </div>
      {/* Load More */}
      <div className='flex justify-center items-center '>
        <div className="mt-8">
          {Array.from({ length: Math.ceil(category_products.length / productsPerPage) }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 mx-1 bg-orange-500 text-white rounded-md focus:outline-none ${
                currentPage === index + 1 && 'bg-orange-800'
              }`}
            >
              Page {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Category