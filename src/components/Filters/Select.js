import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { filterArticleListbyItems } from '../../AC/index'
import { connect } from 'react-redux'
import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return (
            <Select options={options} value={this.props.selection}
                onChange={this.handleSelectionChange}
                multi={true}
            />
        )
    }

    handleSelectionChange = selection => {
        this.props.filterArticleListbyItems(selection);
    }
}

export default connect(({ articleListFilters: { byItems: { selection } }, articles }) => ({
    selection,
    articles }), { filterArticleListbyItems })(SelectFilter)