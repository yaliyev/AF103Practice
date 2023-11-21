import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from 'react'
import Table from './Table'
import TableRow from './TableRow'
import { get, deleteProduct } from '../product-request'

const Products = () => {


  // let [products, setProducts] = useState([]);

  // useEffect(() => {
  //   loadData();
  //   async function loadData() {
  //     let data = await get();
  //     console.log(data);
  //     setProducts(data);
  //   }


  // }, []);

  // function deleteProductFromTable(id) {
  //   deleteProduct(id);
  //   let data = [...products];
  //   setProducts(data);
  // }


  return (
    <>      

    
      <button className='btn btn-primary mx-5 my-2'>Add product</button>
      <Table>


        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Discounted</th>
            <th>Units in Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return <TableRow key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.unitPrice}</td>
              <td>{product.discontinued.toString()}</td>
              <td>{product.unitsInStock}</td>
              <td>
                <button className='btn btn-warning mx-2'>Edit</button>
                <button onClick={() => { deleteProductFromTable(product.id) }} className='btn btn-danger mx-2'>Delete</button>
              </td>
            </TableRow>
          })}
        </tbody>
      </Table>
    </>

  )
}

export default Products