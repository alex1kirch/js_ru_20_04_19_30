import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PagedCommentList from '../components/PagedCommentList'
import CommentListPaginator from '../components/CommentListPaginator'
import { Redirect } from 'react-router-dom'

class CommentsPage extends Component {
    static propTypes = {

    };

    render() {
        const { match } = this.props
        const { params: { page } } = match

        const intPage = parseInt(page, 10)
        return (
            <div>
                <CommentListPaginator page={intPage} />
                <PagedCommentList page={intPage} />
            </div>
        )
    }
}

export default CommentsPage