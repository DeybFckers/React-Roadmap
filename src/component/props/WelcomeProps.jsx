//when you create a reuseable functions you need to declare a property in parameters
export const WelcomeProps = (props) => {
  console.log(props);

  return (
    //when you reuse this function you should use the properties that is declared which is name
    <h2>
      Welcome, {props.name} a.k.a {props.alias}
    </h2>
  );
};

export const Products = (products) => {
  return (
    <div>
      <h3>Name: {products.name}</h3>
      <p>Price: {products.price}</p>
      <p>In stock: {products.inStock ? "Yes" : "No"}</p>
      <p>Categories: {products.categories.join(", ")}</p>
    </div>
  );
};

//you can also do this
// export const Products = ({ title, price, inStock, categoies }) => {
//   return (
//     <div>
//       <h3>Name: {title}</h3>
//       <p>Price: {price}</p>
//       <p>In stock: {inStock ? "Yes" : "No"}</p>
//       <p>Categories: {categoies.join(", ")}</p>
//     </div>
//   );
// };
