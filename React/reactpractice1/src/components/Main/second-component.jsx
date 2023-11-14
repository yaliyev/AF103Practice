import React from 'react'
import { products } from '../../products';


const SecondComponent = () => {
  products.sort((a,b)=>b.price - a.price);
  return (
    <ul>
      {products.map((product)=>{
        return <li key={product.id}>{product.title}</li>
      })}
    </ul>
  )
}

export default SecondComponent