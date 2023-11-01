import { FormsSection } from './FormsSection';
import { CVSheet } from './cv/CVSheet';
import '../styles/Outlet.css';

export const Outlet = () => {
  return (
    <div className='main-container'>
      <div className='form-sec'>
        <FormsSection />
      </div>
      <CVSheet />
    </div>
  );
};
