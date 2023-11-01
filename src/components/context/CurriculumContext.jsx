import { createContext, useContext, useState } from 'react';

const CurriculumContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useCurriculumContext = () => {
  const context = useContext(CurriculumContext);
  return context;
};

let nextId = 1;

export const CurriculumContextProvider = ({ children }) => {
  const [personalData, setPersonalData] = useState({});

  const [schoolsInfo, setSchoolsInfo] = useState([]);
  const [schoolData, setSchoolData] = useState({});

  const [companiesInfo, setCompaniesInfo] = useState([]);
  const [companyData, setCompanyData] = useState({});

  const clearObjectValues = (object) => {
    const clearedObject = {};
    for (const key in object) {
      clearedObject[key] = '';
    }
    return clearedObject;
  };

  const submitPersonalData = (e, setData) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitPersonalData = (e) => {
    e.preventDefault()
  }

  const handleSubmit = (e, info, setInfo, data, setData) => {
    e.preventDefault();
    const id = nextId++;
    const newData = [...info, { ...data, id }];
    setInfo(newData);
    setData(clearObjectValues(data));
  };

  const handleOnChange = (e, setValues, values) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };

  const handleEditSchool = (updatedData, id, dataToChange, setDataToChange) => {
    const updatedInfo = dataToChange.map((s) => {
      if (s.id === id) {
        return { ...s, ...updatedData };
      }
      return s;
    });

    setDataToChange(updatedInfo);
  };

  const handleEdit = (e, edit, dataToEdit) => {
    e.preventDefault();
    edit(dataToEdit);
  };

  const handleEditChange = (e, setDataToEdit, dataToEdit) => {
    const name = e.target.name;
    const value = e.target.value;

    setDataToEdit({ ...dataToEdit, [name]: value });
  };

  return (
    <CurriculumContext.Provider
      value={{
        schoolsInfo,
        setSchoolsInfo,
        schoolData,
        setSchoolData,
        companiesInfo,
        setCompaniesInfo,
        companyData,
        setCompanyData,
        personalData,
        setPersonalData,
        handleSubmit,
        handleOnChange,
        handleEditSchool,
        submitPersonalData,
        handleEdit,
        handleEditChange,
        handleSubmitPersonalData
      }}
    >
      {children}
    </CurriculumContext.Provider>
  );
};
