import React, { useState } from "react";
import "react-dates/initialize";
import {
  SingleDatePickerWrapper,
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from "react-dates";
import "react-dates/lib/css/_datepicker.css";

class MyDateInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: null,
      focused: false
    };
  }

  render() {
    console.log(this.state.date);
    return (
      <SingleDatePicker
        date={this.state.date} // momentPropTypes.momentObj or null
        onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
        focused={this.state.focused} // PropTypes.bool
        onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
        isOutsideRange={() => false}
        numberOfMonths={1}
        value={this.props.value}
        onChange={e => this.props.handleChange(e)}
      />
    );
  }
}
export default MyDateInput;
