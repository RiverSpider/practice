import classes from './Navigation.module.css';
import { Link } from 'react-router-dom';

interface NavigationTitleSubProps {
    iconSrc: string;
    title: string;
    onClick: () => void;
    to: string;
  }

  const NavigationTitleSub: React.FC<NavigationTitleSubProps> = ({ iconSrc, title, onClick, to }) => {
    return (
      <Link to={to}>
      <div className={classes.icon_container} onClick={onClick}>
        <div className={classes.line}></div>
        <img className={classes.icon_sub} src={iconSrc}></img>
        <div className={classes.nav_name_sub}>{title}</div>
      </div>
      </Link>
    );
  }
  
  export default NavigationTitleSub;
