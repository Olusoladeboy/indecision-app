'use strict';

// JSX
var appObject = {
    title: 'This is a JSX Header',
    subtitle: "Mafo!!! Awa ti Naira Marley"
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        appObject.title
    ),
    React.createElement(
        'p',
        null,
        appObject.subtitle
    )
);

var user = {
    name: 'Emmnauel Olusola',
    age: 21,
    location: 'Enugu'
};

var getLocation = function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
};
// true ? valueToShowWhenTrue : valueToShowWhenForce - Ternary Operator
// true && useThisWhenItsTrue

// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Hey, Anonymous'}</h1>
//         {(user.age && user.age >= 21) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// )

var count = 0;
var addOne = function addOne() {
    count++;
    renderCounterApp();
};
var minusOne = function minusOne() {
    count--;
    renderCounterApp();
};
var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count,
            ' '
        ),
        React.createElement(
            'button',
            { id: '', className: '', onClick: addOne },
            ' +1 '
        ),
        React.createElement(
            'button',
            { id: '', className: '', onClick: minusOne },
            ' -1 '
        ),
        React.createElement(
            'button',
            { id: '', className: '', onClick: reset },
            ' Reset '
        )
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
