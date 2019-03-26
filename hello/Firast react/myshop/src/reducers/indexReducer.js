import {combineReducers} from 'redux';


import books from './booksReducer'
import filter from './Filter'
import card from './cartReducer'

export default combineReducers({
    books,filter,card
})