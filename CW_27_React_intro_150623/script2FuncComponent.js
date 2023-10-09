// function Group() {
//     return (
//     <div>
//         <h2>Java 52</h2>
//         <h2>Java 52</h2>
//     </div>
//     )
// }

const Group = () => {
    return (
        <div>
            <h2>Java 52</h2>
        </div>
    )
}

// ReactDOM.render(
//     <Group />, document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById('root'));

// <> </> - заменяет <React.Fragment>
root.render(
    <> 
        <Group />
        <Group />
        <Group />
    </>
);