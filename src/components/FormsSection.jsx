import { useCurriculumContext } from "./context/CurriculumContext";
import { SchoolForm } from "./education/SchoolForm";
import { EditSchoolForm } from "./education/EditSchoolForm";
import { EditCompanyForm } from "./company/EditCompanyForm";
import { CompanyForm } from "./company/CompanyForm";
import "../styles/FormsSection.css";
import { PersonalForm } from "./personal/PersonalForm";

export const FormsSection = () => {
  const {
    schoolsInfo,
    setSchoolsInfo,
    schoolData,
    setSchoolData,
    companiesInfo,
    setCompaniesInfo,
    companyData,
    setCompanyData,
    handleSubmit,
    handleOnChange,
    handleEditSchool,
    personalData,
    setPersonalData,
    submitPersonalData
  } = useCurriculumContext();
  return (
    <div className="form-container">
      <div className="personal-forms">
        <PersonalForm
          onChange={(e) => submitPersonalData(e, setPersonalData)}
          // onSubmit={(e) => submitPersonalData(e, setPersonalData, personalData)}
          values={personalData}
        />
      </div>
      <div className="school-forms">
        <div className="inputs-box">
          <SchoolForm
            onChange={(e) => handleOnChange(e, setSchoolData, schoolData)}
            onSubmit={(e) =>
              handleSubmit(
                e,
                schoolsInfo,
                setSchoolsInfo,
                schoolData,
                setSchoolData
              )
            }
            values={schoolData}
          />
        </div>
        <div className="inputs-box">
          {schoolsInfo.length >= 1 &&
            schoolsInfo.map((s) => (
              <EditSchoolForm
                key={s.id}
                schoolData={s}
                onEdit={(updatedData) =>
                  handleEditSchool(
                    updatedData,
                    s.id,
                    schoolsInfo,
                    setSchoolsInfo
                  )
                }
              />
            ))}
        </div>
      </div>
      <div className="company-forms">
        <div className="inputs-box">
          <CompanyForm
            onChange={(e) => handleOnChange(e, setCompanyData, companyData)}
            onSubmit={(e) =>
              handleSubmit(
                e,
                companiesInfo,
                setCompaniesInfo,
                companyData,
                setCompanyData
              )
            }
            values={companyData}
          />
        </div>
        {companiesInfo.length >= 1 &&
          companiesInfo.map((s) => (
            <EditCompanyForm
              key={s.id}
              schoolData={s}
              onEdit={(updatedData) =>
                handleEditSchool(
                  updatedData,
                  s.id,
                  companiesInfo,
                  setCompaniesInfo
                )
              }
            />
          ))}
      </div>
    </div>
  );
};
