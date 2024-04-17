import React from 'react'
import Calendar from 'react-calendar'
import {useState} from 'react';

const Calendarcomponent = () => {
    const [value,onChange] = useState(new Date())
    console.log(value);
  return (
    <div>
        <Calendar
          value={value}
          onChange={onChange}
          calendarType='US'
          defaultView='month'
          selectRange
          className='custom-calendar'
        />
    </div>
  )
}

export default Calendarcomponent    