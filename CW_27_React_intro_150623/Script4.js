class Group extends React.Component {
    render() {
        
        const subTitle = 'Tel Ran program ' + (Math.random() * 10).toFixed(1);
        
        return (
            <>
                <h1>Java 52</h1>
                <h3>{ subTitle } { 3 * 5 }</h3>
            </>
        );
    }
}

// ReactDOM.render(
//     <>
//         <Group />
//     </>, document.getElementById("root")
// )

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <>
        <Group />
        <Group />
        <Group />
    </>
);