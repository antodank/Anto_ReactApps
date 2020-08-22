import React, { Component } from 'react'

export default class ClassCompo extends Component {
    render() {
        return (
            <div>
                {"Hello " + this.props.name}
            </div>
        )
    }
}
