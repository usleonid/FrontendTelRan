// class Task extends React.Component {

//     handleClickEdit = () => {
//         alert(`Press edit button ${this.props.children}`);
//     }

//     handleClickRemove = () => {
//         alert(`Press remove button ${this.props.children}`);
//     }

//     render() {
//         return (
//             <div>
//                 <div>{this.props.children}</div>
//                 <button onClick={this.handleClickEdit}>Edit</button>
//                 <button onClick={this.handleClickRemove}>Remove</button>
//             </div>
//         );
//     }
// }



const Task = (props) => {
    const handleClickEdit = () => {
        alert(`Press edit button ${props.children}`);
    };

    const handleClickRemove = () => {
        alert(`Press remove button ${props.children}`);
    };

    return (
        <div>
            <div>{props.children}</div>
            <button onClick={handleClickEdit}>Edit</button>
            <button onClick={handleClickRemove}>Remove</button>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <Task>Task 1</Task>
        <Task>Task 2</Task>
        <Task>Task 3</Task>
    </>
);
