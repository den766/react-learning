import DemoUserCard from "./demousercard";

type Product = {
  id: number;
  name: string;
  price: number;
  description?: string;
};
function DemoUsers() {
  // const users  : string[]= ["Jhone" , "Walt" , "Angela" , ];

  const products: Product[] = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
    },
    {
      id: 2,
      name: "Mobile",
      price: 20000,
    },
  ];

  //   const product1: Product = { id: 1, name: "well", price: 3000 };

  //   const products2: Product[] = [{ id: 1, name: "well", price: 3000 }];

  //   console.log(product1);

  const featuredProducts: Product[] = [
    {
      id: 1,
      name: "Macbook pro",
      price: 50000,
    },
    {
      id: 2,
      name: "Iphone",
      price: 20000,
    },
  ];

  const cart: Product[] = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      description: "Awesome",
    },
    {
      id: 2,
      name: "Mobile",
      price: 20000,
      description: "Excellent",
    },
  ];

  // const Cap = cart[0].description?.toUpperCase();
  // console.log(Cap);

  function printProduct(cart: Product) {
    console.log(cart.name);
  }

  printProduct(cart[0]);
  return (
    <>
      {/* <h1>Demo Users</h1>
      {cart.map((user) => (
        <div key={user.id}>
          <p >{user.name?.toUpperCase()}</p>
      
        </div>
      ))} */}
      <DemoUserCard name="Angela" age={33}/>
    </>
  );
}

export default DemoUsers;
