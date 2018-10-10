//Greet.js
import React from 'react';
import { render } from 'react-dom';
import '../scss/test.scss';
//import '../img/test.scss';
class Greet extends React.Component{
	render() {
		return (
			<div>
				test webpack_test_02
				teste2
				<div className="bottom">
					<button></button>
				</div>
				<div><img src = {require('../img/account_01.png')}/></div>
			</div>
			)
	}
}
export default Greet;


/* class Greet extends React.Component{ */
// 			constructor(props) {
// 				super(props);
// 				this.state = {
// 						keyWType:'2',
// 						keyWTypeTxt:'全文',
// 						keyWord:'',
// 						keyBoxShow:false
// 					}
// 				this.keyWTypeTap = this.keyWTypeTap.bind(this);
// 				this.keyWTypeItemTap = this.keyWTypeItemTap.bind(this);
// 				this.keyHandle = this.keyHandle.bind(this);
// 			}
			
// 			keyWTypeTap(event) {
// 					this.setState({
// 						keyBoxShow: !this.state.keyBoxShow
// 					})
// 			}
// 			keyWTypeItemTap(event) {
// 					var keyWType = event.target.getAttribute("data-value");
// 					console.log(event.target.getAttribute("data-value"))
// 					var keyWTypeTxt = keyWType == '0' ? '职位' : (keyWType == '2' ? '全文' : '企业')
// 					this.setState({
// 						keyWType:keyWType,
// 						keyWTypeTxt:keyWTypeTxt,
// 						keyBoxShow:false
// 					})
// 			}
// 			keyHandle(event) {
// 					this.setState({
// 						keyWord: event.target.value
// 					})
// 				}
// 			handleSubmit() {
					
// 			}
// 			render() {
// 				return <div className ="search">
// 							<form className="search_body" action="result.uhtml" >
// 								<div className="search-wrap">
// 									<input className="search-input" placeholder="请输入职位或企业关键字" value = {this.keyWord} onChange = {this.keyHandle}/>
// 									<div className = "search-keyWord" value={this.state.keyWType} onClick={this.keyWTypeTap}>{this.state.keyWTypeTxt}</div>
// 									<ul  className = { this.state.keyBoxShow ? 'search-kwTypeList' : 'search-kwTypeList hide'}>
// 										<li  onClick = {this.keyWTypeItemTap} data-value ='2'>全文</li>
// 										<li  onClick = {this.keyWTypeItemTap} data-value ='0'>职位</li>
// 										<li  onClick = {this.keyWTypeItemTap} data-value ='1'>企业</li>
// 									</ul>
// 								</div>
// 								<button type="submit"  id="searchFormBtn" className="pointer">搜 索</button>
// 							</form>
// 						</div>
						
// 			}
// 		}


// export default Greet;