import React, { useContext } from 'react'
import {ShopContext2} from '../Context/ShopContext2'
import BredCrums from '../Components/BredCrums/BredCrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay.jsx';
import { useParams } from 'react-router-dom';
import Description from '../Components/Description/Description.jsx';
import RelatedItem from '../Components/RelatedItems/RelatedItem.jsx';
const Product = () => {
  const{all_product} = useContext(ShopContext2);
  const {productId} = useParams();
const product = all_product.find((e)=>e.id === Number(productId))
  return (
    <div>
      <BredCrums product={product} />
      <ProductDisplay product={product} />
      <Description/>
      <RelatedItem/>
    </div>
  )
}

export default Product