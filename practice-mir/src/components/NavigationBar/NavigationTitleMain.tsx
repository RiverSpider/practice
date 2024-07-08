import classes from './Navigation.module.css';
import { Link } from 'react-router-dom';

interface NavigationTitleMainProps {
    iconSrc: string;
    title: string;
    onClick: () => void;
    isActive: boolean;
    to: string;
  }

  const NavigationTitleMain: React.FC<NavigationTitleMainProps> = ({ iconSrc, title, onClick, isActive, to }) => {
    const lineActiveClass = isActive ? classes.line_active_blue : classes.line_active_gray;

    return (
      <Link to={to}>
      <div className={classes.icon_container} onClick={onClick}>
        <div className={lineActiveClass}></div>
        <img className={classes.icon_main} src={iconSrc}></img>
        <div className={classes.nav_name}>{title}</div>
      </div>
      </Link>
    );
  }
  
  export default NavigationTitleMain;
