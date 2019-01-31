import React, {Component} from 'react';


class ToDoListFooter extends Component {

    constructor(props) {
        super(props);

    }


    handleFilterChanged(e)
    {
// this.props.filter=e.currentTarget.dataset.value;
        this.props.ChangeFilterCallback(e.currentTarget.dataset.value);
    }

    render() {
       var {tasks,Filter}=this.props;
        return <div className="Footer">
            <div>
               <span className="ItemsLeft">
{

  tasks

}
                   активных таска
               </span>
            </div>
            <div className="buttons">
                <button className={Filter==="all"?"selected":""} data-value="all" onClick={this.handleFilterChanged.bind(this)}>All</button>
                <button className={Filter==="active"?"selected":""} data-value="active"   onClick={this.handleFilterChanged.bind(this)}>Active</button>
                <button className={Filter==="complited"?"selected":""} data-value="complited"   onClick={this.handleFilterChanged.bind(this)}>complited</button>
            </div>
            <div>

            </div>
            <div> <span onClick={this.props.clearCompleter}>Clear Completed</span>



            </div>

        </div>
    }
}

export default ToDoListFooter;