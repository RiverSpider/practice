import classes from './EmptyPage.module.css';

interface EmptyPageProps {
  isActive: boolean;
}

const EmptyPage: React.FC<EmptyPageProps> = ({ isActive  }) => {
  return (
    <div 
      className={`${classes.empty_page} ${isActive ? classes.slide_in : classes.slide_out }`}
    ></div>
  );
}

export default EmptyPage;
