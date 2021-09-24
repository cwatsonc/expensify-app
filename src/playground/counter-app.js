console.log('counter-app loading');

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleMinus = this.handleMinus.bind(this);
        this.handlePlus = this.handlePlus.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        try {
            const countStr = localStorage.getItem('count');
            const count = parseInt(countStr, 10);
            if (!isNaN(count)) {
                this.setState(() => ({ count }));
            }
        } catch (ex) {
            // do nothing}
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }
    handlePlus(e) {
        e.preventDefault();
        this.setState((previousState) => ({ count: previousState.count + 1 }))
    }

    handleMinus(e) {
        e.preventDefault();
        this.setState((previousState) => ({ count: previousState.count - 1 }))
    }

    handleReset(e) {
        e.preventDefault();
        this.setState(() => ({ count: 0 }))
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handlePlus}>+1</button>
                <button onClick={this.handleMinus}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById("app"))

// console.log('app.js is running now');

// let count = 0;

// const appData = {
//     title: 'Indecision Application',
//     subTitle: 'This is the beginning of the start, but not the end of the beginning.',
//     options: ["one", "two", "three"],
// }
// const optionsStr = (array) => {
//     return array && array.length > 0 ? array.join(", ") : undefined;
// }

// const template = (
//     <div>
//         <h1>{appData.title}</h1>
//         {appData.subTitle && <p>{appData.subTitle}</p>}
//         {appData.options && appData.options.length > 0 ? <p>options: {optionsStr(appData.options)}</p> : <p>no options</p>}
//     </div>
// );

// const appRoot = document.getElementById('app');




