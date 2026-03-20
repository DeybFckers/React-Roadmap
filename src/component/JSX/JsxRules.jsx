
/*
Rule #1 this is wrong because every component must return or it should be wrapped 
in a single or parent container so you have to create a div as parent container

export const UserProfile = () => {
    return (
        <h1>Rules of JSX</h1>
        <p>Rules of JSX</p>
    )
}

Rule #2 Every Single tag must be properly closed

this allow in html
< input type = "text" placeholder"your name >

but in react is not allowed it should be close properly
you have you put a slash in closing element <input />

Rule #3 The attributes should be camelCase

Example:
className
htmlFor
tabIndex

Rule #4 you can embed javascript expressions directly in your markup using curly braces

const name = "Peter Parker"

<h2>{name}</h2>

*/