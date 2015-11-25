'use strict';

var React = require('react');

class Name extends React.Component {
    render() {
        return (
            <h1>Hello {this.props.children}!</h1>
        )
    }
}

module.exports = Name;