import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import BookCard from '../components/BookCard'
import * as cardActions from '../actions/cartAction'


const mapStateToProps = ({card}, {id}) => ({
    addedCount: card.items.reduce(
        (count, item) => count + (item.id === id ? 1 : 0), 0)

});
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cardActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(BookCard);