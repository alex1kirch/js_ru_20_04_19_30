import React, {Component} from 'react'
import Comment from './Comment'

export default class CommentList  extends Component {
    state = {
        isOpen: false
    }

    toggleOpen = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        const {comments} = this.props;
        const {isOpen} = this.state;

        if (comments.length === 0) {
            return (<div>No comments</div>)
        }

        return (
            <div>
                {this.getBody()}

                <a onClick={this.toggleOpen}>
                    {isOpen ? "Hide comments" : "Show comments"}
                </a>
            </div>
        )
    }

    
    getBody() {
        const {comments} = this.props;
        const {isOpen} = this.state;

        const elements = comments.map(comment => <li key={ comment.id }><Comment comment={ comment }/></li>);
        return isOpen && <ul>{ elements }</ul>
    }
}