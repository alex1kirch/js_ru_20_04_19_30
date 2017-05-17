import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import Article from './Article/index'
import PropTypes from 'prop-types'
import accordion from '../decorators/accordion'
import { connect } from 'react-redux'
import moment from 'moment'

class ArticleList extends Component {
    componentDidMount() {
        const ref = this.refs[this.props.articles[0].id]
        console.log('---', ref, findDOMNode(ref))
    }


    render() {
        const { articles, toggleOpenItem, isItemOpened } = this.props

        const elements = articles.map(article => <li key={article.id}>
            <Article article={article}
                isOpen={isItemOpened(article.id)}
                toggleOpen={toggleOpenItem(article.id)}
                ref={article.id}
            />
        </li>)
        return (
            <ul ref={this.getContainerRef}>
                {elements}
            </ul>
        )
    }

    getContainerRef = ref => {
        this.list = ref
    }
}

const getVisibleArticles = (articles, filter) => {
    const { byItems: { selection }, byDate: { from, to } } = filter;

    if (from && to) {
        articles = articles.filter(article => moment(article.date).isSameOrAfter(from, 'day') &&
            moment(article.date).isSameOrBefore(to, 'day'))
    }

    if (selection.length > 0) {
        var selectionSet = new Set(selection
            .map(({ value }) => value));

        articles = articles.filter(article => selectionSet.has(article.id))
    }

    return articles;
}

ArticleList.propTypes = {
    articles: PropTypes.array,
    //from accordion decorator
    toggleOpenItem: PropTypes.func.isRequired,
    isItemOpened: PropTypes.func.isRequired
}

export default connect((state) => ({
    articles: getVisibleArticles(state.articles, state.articleListFilters)
}))(accordion(ArticleList))