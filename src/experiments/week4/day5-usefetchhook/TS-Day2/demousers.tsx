function DemoUsers() {
  // const users  : string[]= ["Jhone" , "Walt" , "Angela" , ];

  type Product = {
    id: number;
    name: string;
    price: number;
    description?: string;
  };

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

const featuredProducts : Product[] = [
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
]

const cart : Product[] = [ 

      {
      id: 1,
      name: "Laptop",
      price: 50000,
      description: "Awesome"
    },
    {
      id: 2,
      name: "Mobile",
      price: 20000,
      description : "Excellent"
    },
]

// const Cap = cart[0].description?.toUpperCase();
// console.log(Cap);
  return (
    <>
      <h1>Demo Users</h1>
      {cart.map((user) => (
        <div>
          <p key={user.id}>{user.description?.toUpperCase()}</p>
          {/* <p key={user.id}>{user.catogery}</p> */}
        </div>
      ))}
    </>
  );
}

export default DemoUsers;
