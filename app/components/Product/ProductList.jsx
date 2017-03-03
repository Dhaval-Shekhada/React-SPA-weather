var React = require('react');
var ProductCreate = require('ProductCreate');
var Product = require('Product');
var Total = require('Total');

var ProductList = React.createClass({
  getInitialState: function(){
    return {
      total : 0,
      productList :[
        {name: "Android", Price: 200},{name: "Apple", Price: 300},{name: "Windows", Price: 150}
      ]

    };
  },
  createProduct : function (product){
    this.setState({
      productList: this.state.productList.concat(product)
    })

  },

  showProduct:function(name){

    alert("you have selected " + name);

  },
  calculateTotal: function(price){
    this.setState({total : this.state.total + price});
  },

  removeItem : function(price){
      this.setState({total : this.state.total - price});
  },
  render: function(){
    var self = this;
   var products = this.state.productList.map(function(product){
     return ( //key={result.id}>{result.text}
       <Product  name = {product.name} Price ={product.Price} handleShow = {self.showProduct}  handleTotal= {self.calculateTotal } handleRemove ={self.removeItem}/>
     );
   });
    return (
      <div>
          <ProductCreate handleform = {this.createProduct} />
          {products}
          <Total total = {this.state.total}/>

     </div>
   );
  }
});

module.exports = ProductList;
