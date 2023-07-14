class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            isAdd: false
        }
        this.textId = React.createRef();
    }

    handleClickEdit = () => {
        this.setState({ isEdit: true })
    }

    handleClickRemove = () => {
        alert(`Press remove ${this.props.children}`)
        this.props.deleteTask(this.props.index);
    }

    handleClickSave = () => {
        // TO DO
        const task = this.textId.current.value;
        alert(task)
        this.props.updateTask(this.props.index, task);
        this.setState({ isEdit: false })
    }

    handleClickAdd = () => {
        this.setState({ isAdd: true });
    }
    
    renderAdd = () => {
        return (
            <div className="box">
            <textarea ref={this.textId} defaultValue={""}></textarea>
            <button className="btn success" onClick={this.handleClickAdd}>Add</button>
            </div>
        );
    };

    renderEdit = () => {
        return (
            <div className="box">
                <textarea ref={this.textId} defaultValue={this.props.children}></textarea>
                <button className="btn success" onClick={this.handleClickSave}>Save</button>
            </div>
        )
    }

    renderView = () => {
        return (
            <div className="box">
                <div>{ this.props.children }</div>
                <button className="btn light" onClick={this.handleClickEdit}>Edit</button>
                <button className="btn red" onClick={this.handleClickRemove}>Remove</button>
            </div>
        )
    }

    render() {
        if (this.state.isEdit) {
            return this.renderEdit();
        } else if (this.state.isAdd) {
            return this.renderAdd();
        } else {
            return this.renderView();
        }  
    }
}

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: ["Task1", "Task 2", "Task 3"],
            newTask: ""
        }
    }

    handleChange = (event) => {
        this.setState({newTask: event.target.value});
    }

    addTask = (task) => {
        const { newTask, tasks} = this.state
        if (newTask.trim() !== "") {
            const updateTasks = [...this.state.tasks, newTask];
            this.setState({tasks: updateTasks, newTask: ""})
        }
    }

    deleteTask = (index) => {
        const tasks = [...this.state.tasks];
        tasks.splice(index, 1)
        this.setState({tasks})
    }

    //TO DO
    updateTask = (index, task) => {
        const tasks = [...this.state.tasks];
        tasks[index] = task
        this.setState({tasks})
    }

    render() {
        return (
            <div className="field">
                {this.state.tasks.map((task, index) => <Task key={index + 1} index={index} deleteTask={this.deleteTask} updateTask={this.updateTask}>{task}</Task>)}
                <button className="btn add" onClick={this.addTask} index={-1} deleteTask={this.deleteTask} updateTask={this.updateTask}>Add task</button>
            </div>
        ) 
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
    <TaskList />
    </>
); 