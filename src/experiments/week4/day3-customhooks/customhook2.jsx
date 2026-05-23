import useCounter from "../../../hooks/userCounter";

function CounterWeek42() {
  const { count, increase, decrease, reset } = useCounter();

  return (
    <>
      <h1>count2 : {count}</h1>
      <button onClick={increase}>Inc</button>
      <button onClick={decrease}>Dec</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default CounterWeek42;
