// example 01
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);

// example 02
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
           this.props.delay
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()} - delay: {this.props.delay}(ms)</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <Clock delay="1000"/>
        <Clock delay="3000"/>
    </div>,
    document.getElementById('root')
);

// example 03
class Clock extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            count: 1
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
           this.props.delay
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
        
        // this.setState((prevState, props) => ({
        //     count: prevState.count + 1
        // }));

        this.setState(function(prevState, props){
            return {count: prevState.count + 1}
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()} - delay: {this.props.delay}(ms)</h2>
                <h3>{this.state.count}</h3>
            </div>
        );
    }
}

const delay_01 = 1000;
const delay_02 = 2000;

ReactDOM.render(
    <div>
        <Clock delay={delay_01}/>
        <Clock delay={delay_02}/>
    </div>,
    document.getElementById('root')
);