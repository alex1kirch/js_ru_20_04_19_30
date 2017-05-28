import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink, matchPath } from 'react-router-dom'

const CommentListPaginator = function ({ totalOnPage, page }) {
    if (!totalOnPage) return null
    const pageSize = 5;
    const totalPages = Math.ceil(totalOnPage / pageSize)
    const pages = Array.from({ length: totalPages })
        .map((e, pageIndex) => <NavLink key={pageIndex} to={`/comments/${pageIndex + 1}`} activeStyle={{ color: 'red' }}>{pageIndex + 1}</NavLink>)

    return (
        <div>
            {pages}
        </div>
    )
}

CommentListPaginator.propTypes = {
    page: PropTypes.number.isRequired,
    // from connect
    totalOnPage: PropTypes.number,
}

export default connect((state, props) => {
    return {
        totalOnPage: state.comments.totalOnPage,
    }
})(CommentListPaginator)