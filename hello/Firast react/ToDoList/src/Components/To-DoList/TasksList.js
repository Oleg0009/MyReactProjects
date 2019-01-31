import React, {Component} from 'react';
import './css/ToDoList.css';
import Task from "./Task";


class TasksList extends Component {
    constructor(props)
    {
        super(props);
    }
    render() {
        return (
            <div className="TaskList">

                <section className="tasks">


                    {
                        this.props.tasks.map((task) => {
                            return <Task task={task}
                                         deleteCallBack={this.props.DeleteTask}
                                         UpdateTask={this.props.Updatetask}
                                         key={task.id}
                            />


                        })
                    }

                </section>
            </div>

        );
    }
}

export default TasksList;
