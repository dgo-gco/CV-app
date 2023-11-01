import { useCurriculumContext } from "../context/CurriculumContext"
import "../../styles/CVsheet.css"

export const CVSheet = () => {
  const {
    personalData,
    schoolsInfo,
    companiesInfo,
  } = useCurriculumContext();

  return (
    <div className="main-sheet">
      <div className="main-sec">
        <h1>Personal Information</h1>
        <p>{personalData.name && personalData.name }</p>
        <p>{personalData.name && personalData.email }</p>
        <p>{personalData.name && personalData.phone }</p>
      </div>
      <div className="education-sec">
        <h4>Education</h4>
        {schoolsInfo && schoolsInfo.map(school => (
          <div key={school.id}>
          <div className="dates-sec">
            {school.startDate} {school.endDate}
          </div>
          <div className="school-info">
            <p>{school.school}</p>
            <p>{school.degree}</p>
          </div>
          </div>
        ))}
      </div>
      <div className="company-sec">
        <h4>Professional</h4>
        {companiesInfo && companiesInfo.map(company => (
          <div key={company.id}>
          <div className="dates-sec">
            {company.startDate} {company.endDate}
          </div>
          <div className="company-info">
            <p>{company.company}</p>
            <p>{company.responsabilities}</p>
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}
