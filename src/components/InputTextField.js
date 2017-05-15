import React, { Component } from 'react'
import PropTypes from 'prop-types'
import changeTextValidation from '../decorators/changeTextValidation'

class InputTextField extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        //так потом проблемы с сабмитом будут - лучше раздели логику валидации и изменения
        // from changeTextValidation decorator
        value: PropTypes.string,
        isValid: PropTypes.bool,
        onChange: PropTypes.func
    };

    render() {
        const { name, value, isValid, onChange } = this.props;
        const inputStyle = { "borderColor": isValid ? null : "red" };

        return (
            <div>
                {name}: <input type="text" value={value} style={inputStyle} onChange={onChange} />
            </div>
        )
    }
}

function getIsValid(value, props) {
    return value.length > props.min;
}

function canChange(value, props) {
    return value.length <= props.max;
}

export default changeTextValidation(InputTextField, getIsValid, canChange)
