import React,{useContext} from 'react'
import { ShopContext } from '../Components/Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProducDisplay from '../Components/ProductDisplay/ProducDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct';

 const Product = () => {
  const{all_product}=useContext(ShopContext);
  const {productId}=useParams();
   const product= all_product.find((e)=>e.id===Number(productId))
  return (
    <div>
<Breadcrum product={product}/>
<ProducDisplay product={product}/>
<DescriptionBox/>
<RelatedProduct/>

    </div>
  )
}
export default Product;