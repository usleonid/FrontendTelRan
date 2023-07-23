const Script7 = () => {

    // библиотека React предоставляет метод(хук) useState()
    // useState возвращает кортеж (массив с заранее известными элементами);
    // Первый элемент кортежа - это переменная (на языке React - состояние);
    // Второй элемент кортежа - метод, с помощью которого происходит изменение состояния;
    // ВАЖНО(!!!): состояние можно менять ТОЛЬКО! с помощью метода, полученного из useState()
    const [check, setCheck] = React.useState(false);
    const message = check ? 'checked' : 'unchecked';

    const handleChangeClick = () => {
        // НЕЛЬЗЯ изменять состояние напрямую!
        // check = !check;

        // Можно 
        setCheck(!check);
    }

    return (
        <>
            <input
                type='checkbox'
                onChange={handleChangeClick}
            />
            <p>{message}</p>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Script7 />);
