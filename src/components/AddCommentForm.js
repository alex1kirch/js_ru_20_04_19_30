import React, { Component } from 'react'
import InputTextField from './InputTextField'

class AddCommentForm extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <InputTextField name={"User name"} min={5} max={30} />
                <InputTextField name={"Comment"} min={5} max={30} />
            </div>
        )
    }
}

export default AddCommentForm