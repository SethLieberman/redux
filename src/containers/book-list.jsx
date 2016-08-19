import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index.jsx';
import { bindActionCreators } from 'redux';



// container
class BookList extends Component{
	renderList(){
		return this.props.books.map((book) => {
			return(
					<li 
						key={book.title}
						onClick={() => this.props.selectBook(book)}
						className="list-group-item">
						{book.title}
					</li>
			);
		});
	}

	render(){
		return(
				<ul className="list-group col-sm-4">
					{this.renderList()}
				</ul>
		)
	}
}

// this function is the glue between react and redux
function mapStateToProps(state){
	// whatever is returned will show up as props
	// inside BookList
	return{
		books: state.books
	};
}

// anything returned from this function will end up as props on the BookList container
// this will allow us to call this.props.selectBook in the container
function mapDispatchToProps(dispatch){
	// whenever selectBook is called, the result should be passed to all our reducers
	// dispatch passes the actions to reducers 
	return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// connect taked a function and a component and creates a container above
// promot BookList from a component to a container - needs to know about this new dispatch method, selectbook
// makes it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);