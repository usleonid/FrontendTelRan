// class Student extends React.Component {
//     render () {
//         return (
//             <>
//                 <h1>{ this.props.name }</h1>
//                 <h1>{ this.props.userName }</h1>
//                 <h2>{ this.props.age }</h2>                
//             </>
//         )
//     }
// }

// const Student = ({ name, userName, age }) => {
//     return (
//         <>
//             <h1>{ name }</h1>
//             <h1>{ userName }</h1>
//             <h2>{ age }</h2>
//         </>
//     )
// }

const Student = (props) => {
    return (
        <>
            <h1>{ props.name }</h1>
            <h1>{ props.userName }</h1>
            <h2>{ props.age }</h2>
        </>
    )
}

// ReactDOM.render(
//     <>
//         <Student />
//         <Student />
//         <Student />
//     </>, document.getElementById("root")
// )

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render (
    <>
        <Student name = "Peter" age = {25+5} />
        <Student userName = "Mary" age = {25-6} />
        <Student name = "Ivan" age = {25+3} />
    </>
)