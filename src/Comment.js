import React, {Component} from 'react'

//Это можно сделать Functional Component, по возможности используй их
export default class Comment extends Component {
    render() {
        const {comment} = this.props
        return (
            <div>
                <h3>{comment.user}</h3>
                <p>{comment.text}</p>
            </div>
        )
    }
}
