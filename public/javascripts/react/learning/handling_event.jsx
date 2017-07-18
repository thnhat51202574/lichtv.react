// example 01
function ActionLink() {
    
    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }

    return (
        <a href="#" onClick={handleClick}>
            Click me
        </a>
    );
}

ReactDOM.render(
    <ActionLink />,
    document.getElementById('root')
);

// example 02
class Toggle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        // This binding is necessary to make `this` work in the callback
        this.handleClickEx = this.handleClickEx.bind(this);
    }

    handleClickEx() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClickEx}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
);

// example 03
class Count extends React.Component {

    constructor(props) {
        super(props);
        this.state = {count: 1};
        this.handleClickEx = this.handleClickEx.bind(this);
    }

    handleClickEx() {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    }

    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.handleClickEx}>
                    Count
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <Count />,
    document.getElementById('root')
);

// example 04
class LoggingButton extends React.Component {

    // This syntax ensures `this` is bound within handleClick.
    // Warning: this is *experimental* syntax.
    handleClick = () => {
        console.log('this is:', this);
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                Click me
            </button>
        );
    }
}

ReactDOM.render(
    <LoggingButton />,
    document.getElementById('root')
);

// example 05
class LoggingButton extends React.Component {

    handleClickEx() {
        console.log('this is:', this);
    }

    render() {
        // This syntax ensures `this` is bound within handleClick
        return (
            <button onClick={(e) => this.handleClickEx(e)}>
                Click me
            </button>
        );
    }
}

ReactDOM.render(
    <LoggingButton />,
    document.getElementById('root')
);