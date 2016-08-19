// state argument is not application state
// only the state this reducer is responsible for
// ES6 state = null ...when this comes in first it sets the state to null before anything else

export default function(state = null, action){
	switch(action.type){
		case 'BOOK_SELECTED':
			return action.payload;
	}

	return state;
}