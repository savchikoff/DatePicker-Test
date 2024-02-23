import { useState } from 'react';
import './App.css'

import { calendar, DatePicker, withWeekends, withHolidays, DatePickerWithRange } from 'datepicker-library-savchikoff';

calendar.addDecorator(withWeekends);
calendar.addDecorator(withHolidays);
const Calendar = calendar.getCalendar();

function App() {
  const [pickerType, setPickerType] = useState('withRange');

  const handlePickerTypeChange = (e) => {
    setPickerType(e.target.value);
  }

  return (
    <div className='date-picker-container'>
      <select name="picker-type" id="picker-select" onChange={handlePickerTypeChange}>
        <option value="withRange">DatePicker with Range</option>
        <option value="withoutRange">Simple DatePicker</option>
      </select>
      {pickerType === 'withoutRange' ? (
        <DatePicker CalendarType={Calendar} />
      ) : (
        <DatePickerWithRange CalendarType={Calendar} />
      )}
    </div>
  )
}

export default App
