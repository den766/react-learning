import { useParams } from "react-router-dom"

function ProductsD() {

    const {productid : id} = useParams();
 
     return (

         <h1>Viewing Product{id}</h1>
     )
}

export default ProductsD;