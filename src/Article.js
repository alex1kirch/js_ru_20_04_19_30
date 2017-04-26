import React, {Component} from 'react'
import CommentList from './CommentList'

export default class Article extends Component {
/*
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }
*/
    state = {
        isOpen: false,
        foo: 'bar'
    }

    render() {
        const {article} = this.props
        return (
            <section>
                <h2 onClick={this.toggleOpen}>
                    {article.title}
                </h2>
                {this.getBody()}
            </section>
        )
    }

    getBody() {
        const {article} = this.props;
        const {isOpen} = this.state;

        const comments = article.comments || [];
        return isOpen && <div>
            <div>{this.props.article.text}</div>
            <CommentList comments={comments} />
        </div>
    }

    toggleOpen = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

/*
export default function Article(props) {
    const {article} = props
    return (
        <section>
            <h2>
                {article.title}
            </h2>
            <div>
                {article.text}
            </div>
        </section>
    )
}*/
