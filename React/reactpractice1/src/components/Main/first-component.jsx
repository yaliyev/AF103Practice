import { products } from '../../products';

const firstComponent = () => {
  console.log(products);
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>price</th>
          <th>category</th>
          <th>rate</th>
          <th>count</th>
        </tr>
      </thead>
      <tbody>
          {
            products.map((product,idx)=>{
              return <tr key={idx}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.rating.rate}</td>
                <td>{product.rating.count}</td>
              </tr> 
            })
          }
      </tbody>
    </table>
  )
}

export default firstComponent