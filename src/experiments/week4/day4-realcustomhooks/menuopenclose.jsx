import useToggle from "../../../hooks/useToggle";
function MenuOpenClose() {
  const { isToggle, flipToggle } = useToggle();

  return (
    <div className="container">
      {<button onClick={flipToggle}>{isToggle ? "Close" : "Open"}</button>}

      {isToggle && <div className="OpenMenu"></div>}
    </div>
  );
}

export default MenuOpenClose;
