import React, { useContext, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrums from '../Components/Breadcrums/Breadcrums'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'

const Product = () => {

  const {all_product} = useContext(ShopContext)
  const {category, id} = useParams()
  const product = all_product.find(item => item.id === parseInt(id))

  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts category={category} />
    </div>
  )
}

export default Product