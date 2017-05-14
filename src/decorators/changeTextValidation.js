import React from 'react'
import PropTypes from 'prop-types'

export default (CustomComponent, getIsValid, canChange) => class ChangeTextValidationDecorator extends React.Component {
    state = {
        value: "",
        isValid: true
    }

    handleChange = ev => {
        if (!canChange(ev.target.value, this.props)) return

        this.setState({
            value: ev.target.value,
            isValid: getIsValid(ev.target.value, this.props)
        })

        if(this.props.onChange) {
            this.props.onChange(ev);
        }
    }

    render() {
        const { value, isValid } = this.state;

        return <CustomComponent {...this.props} onChange={this.handleChange} value={value} isValid={isValid} />
    }
}