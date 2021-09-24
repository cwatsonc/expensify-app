console.log('app.js is running now');

let count = 0;

const appData = {
    title: 'Indecision Application',
    subTitle: 'This is the beginning of the start, but not the end of the beginning.',
    options: [],
}
const optionsStr = (array) => {
    return array && array.length > 0 ? array.join(", ") : undefined;
}

const doSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        appData.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
}

const doReset = (e) => {
    e.preventDefault();
    appData.options = [];
    renderApp();
}

const doMakeDecision = (e) => {
    e.preventDefault();
    const selection = Math.floor(Math.random() * appData.options.length);
    alert(appData.options[selection]);
}

const renderApp = () => {
    const template = (
        <div>
            <h1>{appData.title}</h1>
            {appData.subTitle && <p>{appData.subTitle}</p>}
            {appData.options && appData.options.length > 0 ? <p>({appData.options.length}) options</p> : <p>no options</p>}
            <p>{appData.options.length}</p>
            <button onClick={doReset}>Remove All</button>
            <ol>{
                appData.options.map((value) => <li key={value}>{value}</li>)
            }</ol>
            <form onSubmit={doSubmit}>
                <input type="text" name="option"></input>
                <button>add option</button>
                {appData.options.length > 0 && <button onClick={doMakeDecision}>what should I do?</button>}
            </form>
        </div>
    );
    const appRoot = document.getElementById('app');
    ReactDOM.render(template, appRoot);
}



renderApp();



