console.log('App.js is running');
// JSX
const appObject = {
    title: 'Indecision App',
    subtitle: "Put your life in the hands of a computer",
    options: [],
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    
    if (option) {
        appObject.options.push(option);
        e.target.elements.option.value = '';
        renderAppObject();
    }
}

const removeAll = () => {
    appObject.options = [];
    renderAppObject();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * appObject.options.length);
    const option = appObject.options[randomNum];
    alert('You Should ' + option);
}

const appRoot = document.getElementById('app');

const renderAppObject = () => {
    const template = (
        <div>
            <h1>{appObject.title}</h1>
            {appObject.subtitle && <p>{appObject.subtitle}</p>}
            <p>{appObject.options.length > 2 ? 'Here are your options' : 'No Options'}</p>
            <p>{appObject.options.length}</p>
            <button disabled={appObject.options.length === 0} onClick={onMakeDecision}>What Should I Do?</button>
            {appObject.options.length > 0 && <button onClick={removeAll}>Remove All</button>}
            <ol>
                {appObject.options.map((option) => <li key={option}>{option}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input name='option' type='text'/>
                <button>Add Option</button>
            </form>
    
        </div>
    );
    
    ReactDOM.render(template, appRoot);
}

renderAppObject();