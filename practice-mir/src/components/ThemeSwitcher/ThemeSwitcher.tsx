import { observer } from 'mobx-react-lite';
import themeStore from '../../stores/SettingsStore';
import classes from './ThemeSwitcher.module.css';

const ThemeSwitcher = observer(() => {
  const toggleTheme = () => {
    themeStore.toggleTheme();
  };

  return (
    <select onChange={toggleTheme} value={themeStore.theme} className={classes.select_style}>
      <option value="light">Cтарая тема</option>
      <option value="dark">Новая тема</option>
    </select>
  );
});

export default ThemeSwitcher;
