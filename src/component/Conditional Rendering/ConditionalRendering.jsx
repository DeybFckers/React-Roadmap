/* 4 Ways of Conditional Rendering 
1. if-else statement
2. Ternary Operator
3. Logical AND (&&) Operator
4. IIFE (Immediately Invoked Function Expression) */

export const IfelseConditional = ({ name, isOnline, hideOffline }) => {
  if (hideOffline && !isOnline) {
    return null; // it will not render anything if the user is offline and hideOffline is true
  } // always remember that if you have a condition that will not render anything you should start in the top of the code
  //if else statement
  if (isOnline) {
    return (
      <div>
        <h2>{name}</h2>
        <p>🟢 Online</p>
        <p>Available for Chat</p>
      </div>
    );
  } // you can add else here
  return (
    <div>
      <h2>{name}</h2>
      <p>🔴 Offline</p>
      <span>Not Available</span>
    </div>
  );
};

export const TernaryOperator = ({ name, isOnline, hideOffline }) => {
  if (hideOffline && !isOnline) {
    return null;
  }
  /* ternary operator is a shorter way to write an if-else statement and it is often used in JSX for conditional rendering,
    the ? it means its true or yes and the : it means its false or no, so basically the ternary operator is like saying
    if(true) isOnline ? "🟢 Online" : "🔴 Offline" and the else isOnline ? "Available for Chat" : "Not Available" */
  return (
    <div>
      <h2>{name}</h2>
      <p>{isOnline ? "🟢 Online" : "🔴 Offline"}</p>
      <p>{isOnline ? "Available for Chat" : "Not Available"}</p>
      {isOnline ? (
        <button
          className="border-2 text-white bg-black"
          onClick={() => alert(`Message sent to ${name}`)}
        >
          Send a Message
        </button>
      ) : (
        <small>User is offline</small>
      )}
    </div>
  );
};

export const AndOperator = ({ name, isPremium, isNewUser }) => {
  /*logical and AND operator is used to conditionally render a component based on multiple conditions, it will only render the component
   if all the conditions are true,  so in this example it will only render the welcome message if the user is a premium user and a new user */
  return (
    <div className="flex">
      <h2>{name}</h2>
      {isPremium && isNewUser && (
        <p>🎉 Welcome, {name}! You're a new premium user.</p>
      )}
      {isPremium && !isNewUser && (
        <p>🌟 Welcome back, {name}! You're a valued premium user.</p>
      )}
    </div>
  );
};

export const IIFEoperator = ({ name, role }) => {
  /* Immediately Invoked Function Expression (IIFE) */
  let roleBadge = null;
  if (role === "admin") {
    roleBadge = (
      <span className="bg-red-500 text-white px-2 py-1 rounded">Admin</span>
    );
  } else if (role === "moderator") {
    roleBadge = (
      <span className="bg-blue-500 text-white px-2 py-1 rounded">
        Moderator
      </span>
    );
  } else {
    roleBadge = (
      <span className="bg-gray-500 text-white px-2 py-1 rounded">User</span>
    );
  }

  return (
    <div>
      <h2>
        {name}, {roleBadge}
      </h2>
    </div>
  );
};
