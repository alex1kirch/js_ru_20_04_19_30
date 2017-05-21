import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addComment} from '../../AC/index'
import './style.css'

class CommentForm extends Component {
    static propTypes = {
        // Возможно лучше было бы развернуть декоратор
        // и хранить в state openedArticleId
        // но этот способ кажется более очевидным
        // для добавления комментария
        articleId: PropTypes.string.isRequired
    };

    state = {
        user: '',
        comment: ''
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                user: <input value = {this.state.user}
                             onChange = {this.handleChange('user')}
                             className = {this.getClassName('user')} />
                comment: <input value = {this.state.comment}
                                onChange = {this.handleChange('comment')}
                                className = {this.getClassName('comment')} />
                <input type = "submit" value = "submit"/>
            </form>
        )
    }

    handleSubmit = ev => {
        const { articleId } = this.props

        ev.preventDefault()
        console.log('---', this.state)

        // TODO: to make submitted data validation (is empty, is red)

        this.props.addComment({...this.state, articleId });

        this.setState({
            user: '',
            comment: ''
        })
    }

    getClassName = type => this.state[type].length && this.state[type].length < 10 ? 'form-input__error' : ''

    handleChange = type => ev => {
        const {value} = ev.target
        if (value.length > 20) return
        this.setState({
            [type]: value
        })
    }
}

export default connect(null, { addComment })(CommentForm)