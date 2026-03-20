//props pattern can be overwrite the value
export const Greeting = ({ name = "Guest", message = "Hello" }) => {
  return (
    <h2>
      {message}, {name}
    </h2>
  );
};

export const UserInfo = ({ name, age, city, email }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>City: {city}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export const UserCard = ({ id, ...rest }) => {
  return (
    <div>
      <h2>User {id} Details</h2>
      <UserInfo {...rest} />
    </div>
  );
};
