var Product = React.createClass({

getDefaulProps : function(){
  return{
    name:'React'
  };
},

getInitialState: function(){
  return{
    name: this.props.name
  }
},
onButtonClick : function(e){
  e.preventDefault();

  var name = this.ref.name.value;
 this.ref.name.value = '';
},
render: function(){

  return (
    <div >
      <h1>hello {name} </h1>
      <form onSubmit = {this.onButtonClick}>
      <input type ='text' ref = 'name'/>
      <button>click</button>
      </form>
     </div>
  )
}

});

ReactDOM.render(<Product name ></Product>, document.getElementById('app'));
