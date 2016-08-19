import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index.jsx';
import { bindActionCreators } from 'redux';



// container
class BookList extends Component{
	renderList(){
		return this.props.books.map((book) => {
			return(
					<li key={book.title} className="list-group-item">{book.title}</li>
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

function mapDispatchToProps(dispatch){
	return bindActionCreators({delectBook: selectBook}, dispatch)
}

// connect taked a function and a component and creates a container above
export default connect(mapStateToProps, mapDispatchToProps)(BookList);