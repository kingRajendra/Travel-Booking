import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function MyApp() {
  const [date, onChange] = useState(new Date());

  return (
    <div className = "App-calender">
        <center>
          <h1> Choose your Travel Date</h1>
      <Calendar onChange={onChange} value={date} />
      {console.log(date)}
      {date.toString()}
      </center>
    </div>
  );
}

