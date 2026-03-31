import Welcome from "./component/Functional Component/Welcome";
//add a curly braces here
import { Button } from "./component/Functional Component/Button";
import { Hello, HelloWithoutJSX } from "./component/JSX/Hello";
import { WelcomeProps, Products } from "./component/props/WelcomeProps";
import { Greeting } from "./component/props/PropsPattern";
import {
  IfelseConditional,
  TernaryOperator,
  AndOperator,
  IIFEoperator,
} from "./component/Conditional Rendering/ConditionalRendering";

function App() {
  return (
    <div className="flex justify-between ">
      <div>
        <h1>Functional Components</h1>
        <br />
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
        <br />
        ----Conditional Rendering----
        <p>If Else Example: </p>
        <IfelseConditional name="Alice" isOnline={true} />
        <IfelseConditional name="Bob" isOnline={false} hideOffline={true} />
        <p>Ternary Operator Example: </p>
        <TernaryOperator name="Charlie" isOnline={true} />
        <TernaryOperator name="David" isOnline={false} />
        <p>AND Operator Example: </p>
        <AndOperator name="Eve" isPremium={true} isNewUser={true} />
        <AndOperator name="Frank" isPremium={true} isNewUser={false} />
        <p>IIFE Operator Example: </p>
        <IIFEoperator name="Grace" role="admin" />
        <IIFEoperator name="Henry" role="moderator" />
        <IIFEoperator name="Ivy" role="user" />
      </div>

      <div>
        <h1>Rendering</h1>
      </div>

      <div>
        <h1>Hooks</h1>
      </div>

      <div>
        <h1>Routers</h1>
      </div>
    </div>
  );
}

export default App;
