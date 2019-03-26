import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as booksActions from '../actions/booksAction'
import orderBy from 'lodash/orderBy'
import App from "../components/AppComponent"

const sort = (books, filterBy) => {
    switch (filterBy) {
        case 'expensive':
            return orderBy(books, 'price', 'desc');
        case 'cheap':
            return orderBy(books, 'price', 'asc');
        case 'author':
            return orderBy(books, 'author', 'desc');
        default:
            return books;
    }
};
const filterBooks = (books, searchQuery) => (

    books.filter(book =>
        book.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
        book.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
    )

);


const searchBooks = (books, filterBy, searchQuery) => {
    return sort(filterBooks(books, searchQuery), filterBy)
};

const mapStateToProps = ({books, filter}) => ({

    books:
        books.items
        &&
        searchBooks(books.items, filter.filterBy, filter.searchQuery),
    isReady:
    books.isReady
});
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(booksActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);