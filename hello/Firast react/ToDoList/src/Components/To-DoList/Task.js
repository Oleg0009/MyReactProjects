import React, {Component} from 'react';


class Task extends Component {
constructor(props)
{
    super(props);
}
    handleDelete() {

        this.props.deleteCallBack(this.props.task.id)

    }

    handleOnToggle() {
        var task = {...this.props.task};
        task.isDone = !task.isDone;
        this.props.UpdateTask(task)


    }

    render() {
        return (
            <div className={this.props.task.isDone ? 'task done' : 'task'}>
                <input type="checkbox" checked={this.props.task.isDone} onChange={this.handleOnToggle.bind(this)}/>
                {this.props.task.title}
                <span className="delete" onClick={this.handleDelete.bind(this)}>
                                        x
                        </span>
            </div>


        );
    }
}

export default Task;
