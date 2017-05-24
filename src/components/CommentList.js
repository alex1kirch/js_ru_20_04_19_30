import React, { Component } from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm/index'
import toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types'
import Loader from './Loader'
import { connect } from 'react-redux'
import { loadArticleComments } from '../AC/index'
import { commentListSelectorFactory } from '../selectors'

class CommentList extends Component {
    componentWillReceiveProps({ article: { id, commentsLoading, commentsLoaded }, loadArticleComments, isOpen }) {
        if (isOpen && !commentsLoading && !commentsLoaded) loadArticleComments(id)
    }

    render() {
        const { isOpen, toggleOpen } = this.props
        const linkText = isOpen ? 'hide comments' : 'show comments'

        return (
            <div>
                <a href="#" onClick={toggleOpen}>{linkText}</a>
                {this.getBody(this.props)}
            </div>
        )
    }

    getBody(props) {
        const { article: { id, commentsLoading, commentsLoaded }, comments = [], isOpen } = props
        if (!isOpen) return null
        if (commentsLoading) return <Loader />
        if (!commentsLoaded) return null

        if (!comments.length) return <div><p>No comments yet</p><CommentForm articleId={id} /></div>
        return (
            <div>
                <ul>
                    {comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)}
                </ul>
                <CommentForm articleId={id} />
            </div>
        )
    }
}

CommentList.propTypes = {
    article: PropTypes.object.isRequired,
    // from connect
    comments: PropTypes.array.isRequired,
    loading: PropTypes.bool,
    // from toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
}

const createMapStateToProps = () => {
    const commentListSelector = commentListSelectorFactory()

    return (state, ownProps) => {
        return {
            comments: commentListSelector(state, ownProps)
        }
    }
}

export default connect(createMapStateToProps, { loadArticleComments })(toggleOpen(CommentList))