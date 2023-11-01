import { useCurriculumContext } from '../context/CurriculumContext';
import '../../styles/CVsheet.css';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

export const CVSheet = () => {
  const { personalData, schoolsInfo, companiesInfo } = useCurriculumContext();

  return (
    <div className='main-sheet'>
      <div className='main-sec'>
        <h1 className='name'>{personalData.name && personalData.name}</h1>
        <p className='icon-txt'>
          {personalData.email && (
            <span>
              <AiOutlineMail /> {personalData.email}
            </span>
          )}
        </p>
        <p className='icon-txt'>
          {personalData.phone && (
            <span>
              <BsTelephone /> {personalData.phone}
            </span>
          )}
        </p>
      </div>
      <div className='education-sec'>
        <h4>Education</h4>
        {schoolsInfo &&
          schoolsInfo.map((school) => (
            <div key={school.id} className='sections'>
              <div className='dates-sec'>
                {school.startDate} / {school.endDate}
              </div>
              <div className='school-info'>
                <p>{school.school}</p>
                <p>{school.degree}</p>
              </div>
            </div>
          ))}
      </div>
      <div className='company-sec'>
        <h4>Professional</h4>
        {companiesInfo &&
          companiesInfo.map((company) => (
            <div key={company.id} className='sections'>
              <div className='dates-sec'>
                {company.startDate} / {company.endDate}
              </div>
              <div className='company-info'>
                <p>{company.company}</p>
                <p>{company.responsabilities}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
