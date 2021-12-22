function Counter(props) {
  return (
    <>
      <span>Current Count: {props.count} </span>
      <section>
        <button onClick={props.handleIncrement}>+</button>
        <button onClick={props.handleDecrement}>-</button>
      </section>
    </>
  );
}

export default Counter;
