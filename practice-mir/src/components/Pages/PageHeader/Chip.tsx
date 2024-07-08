import classes from './Chip.module.css';
import crossIcon from '../../../assets/images/cross.png';
import { Link } from 'react-router-dom';

interface ChipProps {
    iconSrc: string;
    title: string;
    isActive: boolean;
    to: string;
    onToggleActive: () => void;
    isEndpointActive: boolean;
  }

  const Chip: React.FC<ChipProps> = ({ iconSrc, title, isActive, to, onToggleActive, isEndpointActive }) => {

    return (
    <div>
    {isActive && (
    <div className={!isEndpointActive ? classes.container : classes.active_container}>
      <Link to={to}>
        <img className={classes.icon} src={iconSrc} alt={title} />
        <div className={classes.name}>{title}</div>
        <div className={!isEndpointActive ? classes.line : classes.active_line}></div>
      </Link>
      <img className={classes.cross} src={crossIcon} onClick={onToggleActive}/>
      </div>
    )}
    </div>
    );
  }
  
  export default Chip;
