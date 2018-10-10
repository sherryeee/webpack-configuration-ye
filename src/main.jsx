import React from 'react';
import ReactDom from 'react-dom';
import Greet from './Greet';
ReactDOM.render(
  <h1>Hello World</h1>,
  document.getElementById('root')
);

  /*import React from 'react';
import {render} from 'react-dom';
var React = require('react');
var ReactDOM = require('react-dom');

var Appcomment = require('Greet.js');
React.render(<Appcomment/>,document.getElementsById('root'))

var comment = React.createClass({
	render:function () {
		return (
				<div>hellow yeyyey</div>
			)
	}
}) 
//ReactDOM.render(hellow yeyye, document.getElementById('coot'))
*/
// import React from 'react';
// import {render} from 'react-dom';
// 添加了一个“React.createClass被弃用”的警告，指引用户使用class的方式构建react
// var React = require('react');
// var ReactDOM = require('react-dom');
// console.log(React.createClass)
// var ProductBox = React.createClass({
//   render: function () {
//     return (
//         Hello World
//     )
//   }
// });
// ReactDOM.render( <h1>Hello World</h1>, document.getElementById('root'));
//可以
/*var React = require('react');
var ReactDOM = require('react-dom');
ReactDOM.render(
  <h1>Hello World</h1>,
  document.getElementById('root')
);*/
/*import React, {Component} from 'react'

import {render} from 'react-dom';
console.log(React.createClass)
class Greeter extends Component{
  render() {
    return (
      <div>
        hello world
      </div>
    );
  }
}
render(<Greeter />, document.getElementById('root'));*/