var React = require('react');
var {Link} = require('react-router');
var Example =  function(props){

  return(
    <div >
    <h1 className ="text-center page-title">Example </h1>
    <p> Here are few examples </p>
    <ol>
        <li>
          <Link to='/?location=Surat'> Surat</Link>
        </li>
        <li>
          <Link to='/?location=Munich'>Munich</Link>
        </li>
    </ol>
    </div>
  )
};



module.exports = Example;
