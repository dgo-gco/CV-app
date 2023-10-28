import { useState } from 'react';

export const Education = () => {
  const [school, setSchool] = useState('');
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  return (
    <div>
      <h3>Educational Information:</h3>
      <div>
        <input
          type='text'
          name='school'
          id=''
          placeholder='School'
          onChange={(e) => setSchool(e.target.value)}
          value={school}
        />
        <input
          type='text'
          name='title'
          id=''
          placeholder='Title'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
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
