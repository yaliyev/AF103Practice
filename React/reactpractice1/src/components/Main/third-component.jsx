import { products } from '../../products';

const ThirdComponent = () => {
  products.sort((a,b)=>b.rating.rate -a.rating.rate);
  return (
    <>
    <div className="card" style={{width:'18rem'}}>
      <img className="card-img-top"  src={products[0].image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{products[0].title}</h5>
          <p className="card-text">{products[0].rating.rate}</p>
        </div>
    </div>
    </>
    
  )
}

export default ThirdComponent