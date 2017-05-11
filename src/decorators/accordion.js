//HOC === Higher Order Component === decorator
import React, {Component as BasicComponent} from 'react'

//DecoratedComponent я называл чтоб легче понять было. Лучше выбирай более значущее название
export default (OriginalComponent) => class DecoratedComponent extends BasicComponent {
    state = {
        //Не привязывайся к названиям сущностей, вся суть декораторов в универсальности. Сделай openItemId
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
