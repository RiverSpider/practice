import { observer } from 'mobx-react-lite';
import { navigationStore } from '../../../stores/NavigationStore';
import { useLocation } from 'react-router-dom';
import PageHeader from '../PageHeader/PageHeader';
import classes from './MainPage.module.css';
import Settings from '../ControlPages/Settings/Settings';

const MainPage = observer(() => {
  const { pathname } = useLocation();
  const { isActive } = navigationStore;
  
  const isSettingsPage = pathname === '/settings/system-parameters';

  return (
    <div 
      className={`${classes.empty_page} ${isActive ? classes.slide_in : classes.slide_out}`}
    >
      <PageHeader/>
      {isSettingsPage && <Settings />}
    </div>
  );
});

export default MainPage;
