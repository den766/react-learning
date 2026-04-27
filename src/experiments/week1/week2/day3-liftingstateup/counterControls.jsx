function CounterControls({ setCount }) {
//   console.log(count);
  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    </>
  );
}

export default CounterControls;
