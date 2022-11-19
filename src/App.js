import logo from './logo.svg';
import './App.css';



function App() {
  const products = [
    {name: 'Dell', price: '$5300', brand: 'Dell', genaration: '7th'},
    {name: 'HP', price: '$5900', brand: 'HP', genaration: '6th'},
    {name: 'ASUS', price: '$6300', brand: 'ASUS', genaration: '8th'},
    {name: 'Lenovo', price: '$4300', brand: 'Lenovo', genaration: '5th'}
  ]
  
  return (
    <div className="App">
      {
        products.map(product=> <Product name={product.name} price={product.price} brand={product.brand} genaration={product.genaration}></Product>)
      }
      
      
    </div>
  );
}

function Product(props){
  return (
    <div className='product'>
      <h2>Name: {props.name}</h2>
      <h3>Price: {props.price}</h3>
      <h3>Brand: {props.brand}</h3>
      <h3>Genaration: {props.genaration}</h3>
    </div>
  )
}


export default App;

