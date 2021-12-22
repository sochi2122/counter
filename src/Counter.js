function Counter(props) {
  return (
    <>
      <span>
        {" "}
        Current Count:{" "}
        <span style={{ color: props.count < 0 ? "red" : "green" }}>
          {" "}
          {props.count}{" "}
        </span>
      </span>

      <section>
        <button onClick={props.handleIncrement}>+</button>
        <button onClick={props.handleDecrement}>-</button>
      </section>
    </>
  );
}

export default Counter;
