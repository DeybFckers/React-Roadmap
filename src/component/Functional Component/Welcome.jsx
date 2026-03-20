function Welcome (){
  return (
    <h2>Welcome, Dave</h2>
  )
}

//this is important so the other files can use this functions

export default Welcome;

/*but theres another option instead of using function 
you can change it into export const Welcome = () =>{}
so you dont need to put a export defult welcome;
like in the button component functions */ 