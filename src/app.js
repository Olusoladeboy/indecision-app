// JSX
const appObject = {
    title: 'This is a JSX Header',
    subtitle: "Mafo!!! Awa ti Naira Marley"
}

const template = (
    <div>
        <h1>{appObject.title}</h1>
        <p>{appObject.subtitle}</p>
    </div>
);

const user = {
    name: 'Emmnauel Olusola',
    age: 21,
    location: 'Enugu'
}

const getLocation = (location) => {
    if(location) {
        return <p>Location: {location}</p>;
    }
}
        // true ? valueToShowWhenTrue : valueToShowWhenForce - Ternary Operator
        // true && useThisWhenItsTrue

// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Hey, Anonymous'}</h1>
//         {(user.age && user.age >= 21) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// )

let count = 0;
const addOne = () => {
    count++;
    renderCounterApp()
};
const minusOne = () => {
    count--;
    renderCounterApp()
};
const reset = () => {
    count = 0;
    renderCounterApp()
};

const appRoot = document.getElementById('app');


const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count} </h1>
            <button id="" className="" onClick={addOne}> +1 </button>
            <button id="" className="" onClick={minusOne}> -1 </button>
            <button id="" className="" onClick={reset}> Reset </button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();