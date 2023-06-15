// Remder отображает элементы на странице
//Render первым атрибутом принимает разметку, внутри может быть только 1 корневой элемент
//Render вторым атрибутом принимает место, где необходимо отобразить на странице

// ReactDOM.render( //deprecated
//     <div>
//         <h1>Hello World</h1>
//         <div>Hello from Div!</div>
//     </div>, document.getElementById('root')
// );

//put in root the element we plan to work
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div>
        <h1>Hello World</h1>
        <div>Hello from Div!</div>
    </div>
);