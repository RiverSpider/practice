import { useState } from 'react';
import { navigationStore } from '../../../../stores/NavigationStore';
import classes from './Settings.module.css';
import { observer } from 'mobx-react-lite';
import ThemeSwitcher from '../../../ThemeSwitcher/ThemeSwitcher';

const Settings = observer(() => {

    const [tempStyle, setTempStyle] = useState(navigationStore.navigationStyle);

    const saveStyle = () => {
      navigationStore.setNavigationStyle(tempStyle);
    };
    return (
        <div className={classes.page}>
          <div className={classes.settings_container}>
            <div className={classes.name}>Выбор стиля навигации</div>
            <select
              value={tempStyle}
              onChange={(e) => setTempStyle(e.target.value)}
              className={classes.select_style}
            >
              <option value="old">Старый</option>
              <option value="new">Новый</option>
              <option value="special">Эксперимент</option>
            </select>
            <div className={classes.name}>Выбор темы</div>
            <ThemeSwitcher />
          </div>
          <div className={classes.save_container}>
            <button className={classes.save} onClick={saveStyle}>
              Сохранить
            </button>
          </div>
        </div>
      );
    });

export default Settings;
