import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Component } from 'react';
import { Header } from './components/Header';
import { Products } from './components/Products';
import { CreateProduct } from './components/CreateProduct';

const API_URL = "http://startupapp-env.eba-ispiqyay.us-east-1.elasticbeanstalk.com/api"

class App extends Component {

  state = {
    product: {},
    products: [],
    numberOfProducts: 0
  }

  createProduct = (e) => {
    let productToAdd = this.state.product
    console.log(productToAdd)
    axios.post(`${API_URL}/product`,
      JSON.stringify(productToAdd),
      { headers: {'content-type': 'application/json'}})
      .then(response => {
        console.log(response);
        this.setState({ numberOfProducts: this.state.numberOfProducts + 1 })
      })
    this.setState({ product: {} })
    this.getAllProducts()
  }

  getAllProducts = () => {
    axios.get(`${API_URL}/products`,
    { headers: {'content-type': 'application/json'}})
      .then(response => {
        console.log(response);
        let fetchProducts = response.data
        this.setState({ products: fetchProducts, numberOfProducts: fetchProducts.length })
      })
  }

  onChangeForm = (e) => {
    let product = this.state.product
    if (e.target.name === 'name') {
      product.name = e.target.value
    } else if (e.target.name === 'description') {
      product.description = e.target.value
    } else if (e.target.name === 'quantity') {
      product.quantity = e.target.value
    } else if (e.target.name === 'price') {
      product.price = e.target.value
    }
    this.setState({ product: product })
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <div className='container mrgnbtm'>
          <div className='row'>
            <div className='col-md-8'>
              <Products
                products={this.state.products}
                getAllProducts={this.getAllProducts}
                numberOfProducts={this.state.numberOfProducts} />
            </div>
            <div className='col-md-4'>
              <CreateProduct
                product={this.state.product}
                onChangeForm={this.onChangeForm}
                createProduct={this.createProduct} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
