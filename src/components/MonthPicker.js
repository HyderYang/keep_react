import React from 'react'
import Proptypes from 'prop-types'
import { padLeft, range } from '../common/functions'

class MonthPicker extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectedYear: this.props.year,
      selectedMonth: this.props.month
    }
  }

  toggleDropdown = (event) => {
    event.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen
    })
  };

  selectYear = (event, yearNumber) => {
    event.preventDefault();
    this.setState({
      selectedYear: yearNumber
    })
  };

  selectMonth = (event, monthNumber) => {
    event.preventDefault();
    this.setState({
      isOpen : false,
      selectedMonth: monthNumber
    });
    this.props.onChange(this.state.selectedYear, monthNumber)
  };

  render() {
    const {year, month} = this.props;
    const {isOpen, selectedYear, selectedMonth} = this.state;
    const monthRange = range(12, 1);
    const yearRange = range(9, -4).map(number => number + year);

    return (
      <div className="dropdown month-picker-component">
        <h4>选择月份</h4>
        <button className="btn btn-lg btn-secondary dropdown-toggle"
                onClick={this.toggleDropdown}
        >
          {year}年 {padLeft(month)}月
        </button>
        {
          isOpen &&
          <div className="dropdown-menu" style={{display: 'block'}}>
            <div className="row">
              <div className="col border-right ">
                { yearRange.map((yearNumber, index) =>
                  <a key={index}
                     href="/#"
                     className={yearNumber === selectedYear ? 'dropdown-item active' : 'dropdown-item'}
                     onClick={(event) => {
                         this.selectYear(event, yearNumber)
                     }}
                  >
                    {yearNumber} 年
                  </a>
                ) }
              </div>
              <div className="col">
                { monthRange.map((monthNumber, index) =>
                  <a key={index}
                     className={monthNumber === selectedMonth ? 'dropdown-item active' : 'dropdown-item'}
                     onClick={(event) => {
                       this.selectMonth(event, monthNumber)
                     }}
                  >
                    {padLeft(monthNumber)} 月
                  </a>
                ) }
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

MonthPicker.propTypes = {
  year: Proptypes.number.isRequired,
  month: Proptypes.number.isRequired,
  onChange: Proptypes.func.isRequired,
};

export default MonthPicker;