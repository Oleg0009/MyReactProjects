import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Filter from '../components/Filter'
import * as filteredActions from '../actions/filterAction'


const mapStateToProps = ({filter}) => ({
    filterBy: filter.filterBy,
    searchQuery:filter.searchQuery
});
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(filteredActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);