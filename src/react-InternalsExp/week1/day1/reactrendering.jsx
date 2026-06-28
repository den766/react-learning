import CounterNew from "./counternew";
import HeaderNew from "./headernew";
import FooterNew from "./footernew";

function AppRender() {
    console.log("AppRende Rendered");
  return (
    <>
      <HeaderNew />
      <CounterNew />
      <FooterNew />
    </>
  );
}

export default AppRender;
