import React, { Component } from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'
import Loader from './Loader'
import { loadPageComments } from '../AC'
import { connect } from 'react-redux'

class PagedCommentList extends Component {
    render() {
        const { totalOnPage, commentIds, page } = this.props
        if (!totalOnPage) return <Loader />

        const pageSize = 5
        if (totalOnPage <= (page - 1) * pageSize) return <div><p>No comments</p></div>

        if (!commentIds) return <Loader />
        if (!commentIds.size) return <Loader />

        return (
            <div>
                <ul>
                    {commentIds.map(id => <li key={id}><Comment id={id} /></li>)}
                </ul>
            </div>
        )
    }

    componentDidMount() {
        this.checkAndLoad(this.props)
    }

    componentWillReceiveProps(nextProps) {
        this.checkAndLoad(nextProps)
    }

    checkAndLoad({ commentIds, page, loadPageComments }) {
        if (!commentIds) loadPageComments(page)
    }
}

PagedCommentList.propTypes = {
    page: PropTypes.number.isRequired,
    // from connect
    commentIds: PropTypes.object,
    totalOnPage: PropTypes.number
}

export default connect((state, props) => {
    return {
        totalOnPage: state.comments.totalOnPage,
        commentIds: state.comments.getIn(['pages', props.page])
    }
}, { loadPageComments })(PagedCommentList)