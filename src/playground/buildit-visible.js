console.log('buildit-visible.js is running now');

class VisibleApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visible: false,
            description: 'short description'
        }
    }

    handleToggleVisibility(e) {
        e.preventDefault();
        this.setState((prev) => ({ visible: !prev.visible }))
    }

    render() {
        return (
            <div>
                <h1>Visibility App</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visible ? 'Hide' : 'Show'}</button>
                {this.state.visible && <p>{this.state.description}</p>}
            </div>
        )
    }
}

ReactDOM.render(<VisibleApp />, document.getElementById("app"));




