'use strict';

console.log('App.js is running');
// JSX
var appObject = {
    title: 'Indecision App',
    subtitle: "Put your life in the hands of a computer",
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        appObject.options.push(option);
        e.target.elements.option.value = '';
        renderAppObject();
    }
};

var removeAll = function removeAll() {
    appObject.options = [];
    renderAppObject();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * appObject.options.length);
    var option = appObject.options[randomNum];
    alert('You Should ' + option);
};

var appRoot = document.getElementById('app');

var renderAppObject = function renderAppObject() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            appObject.title
        ),
        appObject.subtitle && React.createElement(
            'p',
            null,
            appObject.subtitle
        ),
        React.createElement(
            'p',
            null,
            appObject.options.length > 2 ? 'Here are your options' : 'No Options'
        ),
        React.createElement(
            'p',
            null,
            appObject.options.length
        ),
        React.createElement(
            'button',
            { disabled: appObject.options.length === 0, onClick: onMakeDecision },
            'What Should I Do?'
        ),
        appObject.options.length > 0 && React.createElement(
            'button',
            { onClick: removeAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            appObject.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { name: 'option', type: 'text' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderAppObject();
