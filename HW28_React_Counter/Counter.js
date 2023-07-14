const Counter = ( {initialValue, step} ) => {

    const [count, setCount] = React.useState(initialValue);
    const [countInput, setCountInput] = React.useState(count);

    return (
        <div>
            <p>Counter: {count}</p>
            <button onClick={() => setCount(count + step)}>
                Add
            </button>
            <button onClick={() => (count-step) >= 0 ? setCount(count - step) : setCount(0)}>
                Subtract
            </button>
            <button onClick={() => setCount(0)}>
                Reset
            </button>
            <input type="number" onChange={(e) => setCountInput(+e.target.value)}></input>
            <button onClick={() => setCount(countInput)}>Set Value</button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter initialValue={10} step={10} />); 