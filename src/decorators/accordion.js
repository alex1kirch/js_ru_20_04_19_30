//HOC === Higher Order Component === decorator
import React, {Component as BasicComponent} from 'react'

export default (OriginalComponent) => class DecoratedComponent extends BasicComponent {
    state = {
        openArticleId: null
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpen={this.toggleOpen}/>
    }

    toggleOpen = id => ev => {
        const { openArticleId } = this.state

        ev && ev.preventDefault && ev.preventDefault()
        this.setState({
            openArticleId: id === openArticleId ? null : id
        })
    }

}