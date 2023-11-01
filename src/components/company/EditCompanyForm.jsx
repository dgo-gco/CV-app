import { useState } from 'react';
import { companyFormInfo } from '../../forms';
import { EditForm } from '../EditForm';
import '../../styles/Form.css';
import { useCurriculumContext } from '../context/CurriculumContext';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

export const EditCompanyForm = ({ onEdit, companyData }) => {
  const [editData, setEditData] = useState(companyData);
  const [isOpen, setIsOpen] = useState(false);
  const { handleEdit, handleEditChange } = useCurriculumContext();

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='accordion-item'>
      <button onClick={toggleAccordion} className='accordion-title'>
        <div className='btn-txt'>Modify {companyData.company}</div>
        <div className='icons'>
          {isOpen ? (
            <MdKeyboardArrowUp className='icon' />
          ) : (
            <MdKeyboardArrowDown className='icon' />
          )}
        </div>
      </button>
      {isOpen && (
        <form className='form'>
          {companyFormInfo.map((x) => (
            <EditForm
              key={x.id}
              form={x}
              onChange={(e) => handleEditChange(e, setEditData, editData)}
              value={companyData[x.name]}
            />
          ))}
          <button onClick={(e) => handleEdit(e, onEdit, editData)} className='edit-btn'>
            Edit
          </button>
        </form>
      )}
    </div>
  );
};
