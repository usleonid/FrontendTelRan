class Group extends React.component {
    render() {
        return (
            <>
            <h3>Java 52</h3>
            <h3>Java 52</h3>
            </>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));

// <> </> - заменяет <React.Fragment>
root.render(
    <> 
        <Group />
        <Group />
        <Group />
    </>
);

// классовый компонент может выполнить все, что умеет функциональный
// функциональный компонент имеет более узкую область применения чем функциональный
