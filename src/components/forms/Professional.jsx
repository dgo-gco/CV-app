import { useState } from 'react';

export const Professional = () => {
  const [company, setCompany] = useState('');
  const [responabilities, setResponsabilities] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  return (
    <div>
      <h3>Professional Information:</h3>
      <div>
        <input
          type='text'
          name='company'
          id=''
          placeholder='Company Name'
          onChange={(e) => setCompany(e.target.value)}
          value={company}
        />
        <input type='text' name='position' id='' placeholder='Position' />
        <input
          type='text'
          name='responsabilitie'
          id=''
          placeholder='Main responsabilities'
          onChange={(e) => setResponsabilities(e.target.value)}
          value={responabilities}
        />
        <input
          type='date'
          name='startDate'
          id=''
          onChange={(e) => setStartDate(e.target.value)}
          value={startDate}
        />
        <input
          type='date'
          name='endDate'
          id=''
          onChange={(e) => setEndDate(e.target.value)}
          value={endDate}
        />
      </div>
    </div>
  );
};
