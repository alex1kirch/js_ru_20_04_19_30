import React, { Component } from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import Chart from './Chart'
import UserForm from './UserForm'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class App extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    state = {
        counter: 0,
        selection: null,
        from: null,
        to: null
    }

    updateCounter = (ev) => {
        ev.preventDefault()
        this.setState({
            counter: this.state.counter + 1
        })
    }

    handleDayClick = day => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    }

    render() {
        const { from, to } = this.state;
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return (
            <div>
                <DayPicker
                    numberOfMonths={2}
                    selectedDays={[from, { from, to }]}
                    onDayClick={this.handleDayClick}
                />
                {this.getDayPickerSelectionInfo()}
                <hr />
                <ArticleList articles={this.props.articles} />
                <hr />
                <UserForm />
                <hr />
                <a href="#" onClick={this.updateCounter}>update chart</a>
                <Chart articles={this.props.articles} key={this.state.counter} />
                <hr />
                <Select options={options} value={this.state.selection}
                    onChange={this.handleSelectionChange}
                    multi={true}
                />
            </div>
        )
    }

    getDayPickerSelectionInfo() {
        const { from, to } = this.state;

        return (<p>
            {(!from || !to) && "Please select two dates"}
            {from && to && `You chose from ${moment(from).format('L')} to ${moment(to).format('L')}`}
        </p>);
    }

    handleSelectionChange = selection => this.setState({ selection })
}

export default App