import { schoolFormInfo } from '../../forms';
import { EditForm } from '../EditForm';
import { useState } from 'react';
import '../../styles/Form.css';
import { useCurriculumContext } from '../context/CurriculumContext';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export const EditSchoolForm = ({ onEdit, schoolData }) => {
  const [editData, setEditData] = useState(schoolData);
  const [isOpen, setIsOpen] = useState(false);

  const { handleEdit, handleEditChange } = useCurriculumContext();

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='accordion-item'>
      <button onClick={toggleAccordion} className='accordion-title'>
      <div className="btn-txt">Modify {schoolData.school}</div>
        <div className="icons">
          {isOpen ? (
            <MdKeyboardArrowUp className="icon" />
          ) : (
            <MdKeyboardArrowDown className="icon" />
          )}
        </div>
      </button>
      {isOpen && (
        <form className='form'>
          {schoolFormInfo.map((x) => (
            <EditForm
              key={x.id}
              form={x}
              onChange={(e) => handleEditChange(e, setEditData, editData)}
              value={schoolData[x.name]}
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
