import React from 'react';

const Error = React.createClass({
    render() {
        return (
            <div>{this.props.text}
                <h1>{this.props.message}</h1>
                <h2>{this.props.error.status}</h2>
                <pre>{this.props.error.stack}</pre>
            </div>
        );
    }
});

export default Error;