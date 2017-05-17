import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { filterArticleListByDate } from '../../AC/index'
import {connect} from 'react-redux'

import 'react-day-picker/lib/style.css';

class DateRange extends Component {

    handleDayClick = (day) => {
        this.props.filterArticleListByDate(DateUtils.addDayToRange(day, this.props));
    }

    render() {
        const { from, to } = this.props;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

export default connect(({ articleListFilters: { byDate } }) => byDate, { filterArticleListByDate })(DateRange)