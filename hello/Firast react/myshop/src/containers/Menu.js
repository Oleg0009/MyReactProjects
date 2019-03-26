import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Menu from '../components/menu'
import * as cardActions from '../actions/cartAction'
import uniqBy from 'lodash/uniqBy'

const mapStateToProps = ({card}) => ({
    totalPrice: card.items.reduce((total,item) => total + item.price, 0),
    count: card.items.length,
    items:uniqBy(card.items,item=>item.id),
})
;
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cardActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);