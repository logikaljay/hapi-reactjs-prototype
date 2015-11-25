'use strict'

var React = require('react')
var Layout = require('./shared/layout')
var Name = require('./components/name')

class Home extends React.Component {
    
    changeName(e) {
        console.log("!!")
    }
    
    render() {
        return (
            <Layout title="Name">
                <Name>{this.props.name}</Name>
            </Layout>
        )
    }
}

module.exports = Home