import Welcome from "./component/Functional Component/Welcome";
//add a curly braces here
import { Button } from "./component/Functional Component/Button";
import { Hello, HelloWithoutJSX } from "./component/JSX/Hello";
import { WelcomeProps, Products } from "./component/props/WelcomeProps";
import { Greeting } from "./component/props/PropsPattern";

function App() {
  return (
    <div>
      <h1>First React Roadmap</h1>
      <Hello />
      <Welcome />
      <Button />
      <br />
      <br />
      ----JSX----
      <HelloWithoutJSX />
      <br />
      ----Props----
      {/* Declare a value here */}
      <WelcomeProps name="Deyb" alias="Fckers" />
      {/* always put a curly braces when it is numbers and boolean */}
      <Products
        title="Gaming Laptop"
        price={1299.99}
        inStock={true}
        categories={["Electronics", "Computers", "Gaming"]}
      />
      <br />
      ----Props Pattern----
      <Greeting name="Bruce" message="Good morning" />
      <Greeting name="Clark" />
      <Greeting message="Welcome" />
    </div>
  );
}

export default App;
