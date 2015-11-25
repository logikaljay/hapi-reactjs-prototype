'use strict';

var React = require('react');

class Layout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                </head>
                <body>
                    {this.props.children}
                    <footer>&copy; SomeCompany {new Date().getYear() + 1900}</footer>
                </body>
            </html>
        );
    }
}

module.exports = Layout;