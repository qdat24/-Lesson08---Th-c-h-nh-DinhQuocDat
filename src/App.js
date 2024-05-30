import React, { Component } from 'react';
import DqdProductlist from './component/DqdProductlist';
import DqdProductAddOrEdit from './component/DqdProductAddOrEdit';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { title: 'Lê Văn Hoàng', id: 2210900024, status: 1 },
        { title: 'Cabbage', id: 1, status: 1 },
        { title: 'Garlic', id: 2, status: 0 },
        { title: 'Apple', id: 3, status: 0 },
        { title: 'Samsung', id: 4, status: 1 },
      ],
      product:"",
      flag:true
    }
  }

  DqdHanldSubmit = (param) => {
    console.log("App:", param);
    //thêm vào bảng dữ liệu product
    let { products } = this.state;
    products.push(param);
    this.setState({
      products: products
    });
  }
  DqdHandleEdit=(product)=>{
    console.log ("App-edit:",product);
    this.setState({
      product:product,
      flag:false
    })
  }
  render() {
    return (
      <div className='container'>
        <h1>Đinh Quốc Đạt -Event Form - Render Data</h1>
        <hr />
        <DqdProductlist renderProducts={this.state.products}DqdOnEit={this.DqdHandleEdit} />
        <hr />
        <DqdProductAddOrEdit onSubmit={this.DqdHanldSubmit}
        renderProduct={this.state.product} renderFlag={this.state.flag}/>
      </div>
    );
  }
}

export default App;
