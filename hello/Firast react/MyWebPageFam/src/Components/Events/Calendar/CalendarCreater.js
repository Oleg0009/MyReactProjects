import React, {Component} from 'react';

import Calendar from 'react-calendar'

class CalendarCreater extends Component {

    constructor(props) {
        super(props);


    }

    DayOnClick(e) {
        var date = new Date(e);
        var day=date.getDate();
        var month=date.getMonth();
        var result="";
        console.log(day);
        console.log(month);
        if(month===0&& day===22)
        {
            result="Julia birthsday"
        }
       this.props.change(result);
        console.log(result);
    }
    MonthOnClick(e) {
        var date = new Date(e);


        console.log(date.getMonth());

    }    render() {
        return (
            <div>
                <Calendar onClickDay={this.DayOnClick.bind(this)} onClickMonth={this.MonthOnClick.bind(this)} o/>
            </div>)
    }

}

export default CalendarCreater;