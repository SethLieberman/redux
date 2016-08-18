import React,{Component} from 'react';
import {connent} from 'react-redux';
import BookList from '../containers/book-list.jsx';


export default class App extends Component{
	render(){
		return(
			<div>
				<BookList />
			</div>
			);
	}
}
export default App;