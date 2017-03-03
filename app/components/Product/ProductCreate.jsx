var React = require('react');
var Product = require('Product');
var ProductCreate = React.createClass({

onButtonClick: function(e){
e.preventDefault();
var product = {
  name: this.refs.name.value,
  Price: parseInt(this.refs.price.value)
}


this.props.handleform(product);

this.refs.name.value ="";
this.refs.price.value= "";
},
render: function(){

 return (
   <div className="page-title">
         <form onSubmit = {this.onButtonClick}>
           <input  type="text" placeholder= "Product Name" ref="name"/>
           <input  type="text" placeholder= "Product Price" ref = "price"/>
           <button className ="small button"> Create New Product</button>
         </form>
       <hr/>
   </div>
 );
}

});

module.exports = ProductCreate ;
