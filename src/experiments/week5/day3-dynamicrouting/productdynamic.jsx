import { Link } from "react-router-dom";


function ProductPage() {


      return (

          <>
          <Link to={"product/1"}>Product1</Link>
          <Link to={"product/2"}>Product2</Link>
          <Link to={"product/3"}>Product3</Link>
          </>
      )
}

export default ProductPage;