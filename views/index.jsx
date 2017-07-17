import React from 'react';

class Home extends React.Component {
    clickHere (){
        console.log(789);
    }
    render() {
        return (
            <div>
                <link rel='stylesheet' href='/stylesheets/style.css?v=1.0.0' />
                <p>Title: {this.props.title}</p>
                <p>Text: {this.props.text}</p>
            </div>
        );
    }
};

module.exports = Home;