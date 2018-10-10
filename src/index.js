import React from 'react';
import ReactDom from 'react-dom';
import Greet from './components/Greet';
import './scss/global.scss'
// import jquery from 'jquery';


// import { BrowserRouter as Router,Route,Link} from 'react-router-dom';

 
// import PosList from './components/posList';

ReactDom.render(<Greet />, document.getElementById('appContainer'));
// class IndexPage extends React.Component{
//     constructor (props){
//         super(props);
//         this.state = {
//             positionList : []
//         }
//         $.ajax({
//             url:'/search/recommendLastes4Home_action.ujson',
//            // dataType: 'jsonp',
//             jsonp : 'callbackparam',
// 		    jsonpCallback : 'callbackFun',
//             data: {},
//             contentType:'text/plain',
//             success:function(json){
//                 console.log(json);			
//                 self.setState({
//                     positionList:json.rows
//                 })
//             },
//             error:function(){
//                 alert('fail');
                
//             }
//         })
//     }

//     render () {
//        return <div className ='module'>
//             <Greet />
//             <PosList data = {this.state.positionList} />
// 		</div>
//     }
// }
// {/*<Router history= {hashHistory} >
//         <Route path ="/" component= {IndexPage}>
//         </Route>
//     </Router>*/}
// ReactDom.render((
//     //<IndexPage />
//     <Router>
//         <Route exact  component= {IndexPage}>
//         </Route>
//     </Router>
// ), document.getElementById('container'));


// var test = document.createElement('div');
// test.textContent = "Hi there and test!";
// document.querySelector("#appContainer").appendChild(test);


