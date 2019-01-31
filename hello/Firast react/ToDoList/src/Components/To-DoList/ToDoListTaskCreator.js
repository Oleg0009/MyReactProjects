import React, {Component} from 'react';
import './css/ToDoList.css';


class ToDoListTaskCreator extends Component {


    constructor(props) {
        super(props);
        this.NewIndex = 2;
        this.state = {};
        this.handleKeyPress = this.handleKeyPress.bind(this);

    }

    handleKeyPress(e) {


        if (e.key === "Enter") {

            let NewTask = {
                title: e.target.value,
                id: this.NewIndex,
                isDone: false,
            };


            this.props.AddTask(NewTask);
            this.NewIndex++;
        }

    }


    render() {
        return (

            <header className="TaskCreate">
                <input type="text" onKeyPress={this.handleKeyPress}/>
            </header>


        );
    }
}

export default ToDoListTaskCreator;