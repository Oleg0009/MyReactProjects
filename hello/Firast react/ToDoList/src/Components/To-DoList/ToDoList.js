import React, {Component} from 'react';
import './css/ToDoList.css';
import ToDoListFooter from "./ToDoListFooter";
import ToDoListTaskCreator from "./ToDoListTaskCreator";
import TasksList from "./TasksList";

class ToDoList extends Component {


    constructor(props) {
        super(props);


        this.state = {
            tasks: [
                {
                    id: 0,
                    title: "Learn Js",
                    isDone: false
                },
                {
                    id: 1,
                    title: "Learn REACT",
                    isDone: false
                }
            ],
            filter: "all",


        };

    }

    ClearCompleter() {
        this.setState({tasks:this.state.tasks.filter(t=>!t.isDone)})
    }

    updateTask(task) {
        const NewtaskList = [...this.state.tasks];
        NewtaskList.forEach((t) => {
            if (t.id === task.id) {
                t.isDone = task.isDone;
                return;
            }
        });
        this.setState({
            tasks: NewtaskList
        })
    }

    handleAddTask(task) {
        this.setState({
            tasks: [...this.state.tasks,
                task
            ]
        })

    }

    handleDelete(taskID) {
        console.log("h");
        let Filtertask = this.state.tasks.filter((t) => {

            return t.id !== taskID;


        });
        this.setState({
            tasks: Filtertask

        })

    }

    ChangeFilter(Filtervalue) {
        this.setState({filter: Filtervalue})
    }

    render() {
        var {tasks, filter} = this.state;

        var filteredtask = [];
        if (filter === "all") filteredtask = tasks;
        if (filter === "active") filteredtask = tasks.filter(t => !t.isDone);
        if (filter === "complited") filteredtask = tasks.filter(t => t.isDone);


        return (
            <div className="ToDoList">
                <ToDoListTaskCreator AddTask={this.handleAddTask.bind(this)}/>
                <TasksList tasks={filteredtask} DeleteTask={this.handleDelete.bind(this)}
                           Updatetask={this.updateTask.bind(this)}/>
                <ToDoListFooter ChangeFilterCallback={this.ChangeFilter.bind(this)}
                                tasks={tasks.filter((t) => !t.isDone).length} Filter={filter}
                clearCompleter={this.ClearCompleter.bind(this)}/>
            </div>

        );
    }
}

export default ToDoList;
