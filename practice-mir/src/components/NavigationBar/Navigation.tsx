import classes from './Navigation.module.css';
import menuIcon from '../../assets/images/menu.svg';
import mainIcon from '../../assets/images/main.png';
import diagnosticIcon from '../../assets/images/diagnostic.png';
import abonIcon from '../../assets/images/aboniments.png';
import balanceIcon from '../../assets/images/balance.png';
import networkIcon from '../../assets/images/network.png';
import reportIcon from '../../assets/images/document.svg';
import toolsIcon from '../../assets/images/tools.png';
import lightIcon from '../../assets/images/light.png';
import settingsIcon from '../../assets/images/logo.png';

import diagnosticIcon1 from '../../assets/images/diagnostic1.png';
import diagnosticIcon2 from '../../assets/images/diagnostic2.png';
import diagnosticIcon3 from '../../assets/images/diagnostic3.png';
import abonIcon1 from '../../assets/images/aboniments1.png';
import abonIcon2 from '../../assets/images/aboniments2.png';
import balanceIcon1 from '../../assets/images/balance1.png';
import balanceIcon2 from '../../assets/images/balance1.svg';
import networkIcon1 from '../../assets/images/network1.png';
import networkIcon2 from '../../assets/images/network2.svg';
import networkIcon3 from '../../assets/images/network3.png';
import networkIcon4 from '../../assets/images/network4.png';
import reportIcon1 from '../../assets/images/document1.png';
import reportIcon2 from '../../assets/images/document2.png';
import reportIcon3 from '../../assets/images/document3.png';
import toolsIcon1 from '../../assets/images/tools1.png';
import toolsIcon2 from '../../assets/images/tools2.png';
import toolsIcon3 from '../../assets/images/tools3.png';

import NavigationTitleMain from './NavigationTitleMain';
import NavigationTitleSub from './NavigationTitleSub';

import { navigationStore } from '../../stores/NavigationStore';
import { observer } from 'mobx-react-lite';

const Navigation = observer(() => {

  const { 
    navigationStyle,
    setIsActive,
    isActive,
    setIsActiveNew,
    isActiveNew,
    isSubVisibleMain,
    toggleSubVisibleMain,
    isSubVisibleLight,
    toggleSubVisibleLight,
    isSubVisibleDiagnostic,
    toggleSubVisibleDiagnostic,
    isSubVisibleDiagnostic1,
    toggleSubVisibleDiagnostic1,
    isSubVisibleDiagnostic2,
    toggleSubVisibleDiagnostic2,
    isSubVisibleDiagnostic3,
    toggleSubVisibleDiagnostic3,
    isSubVisibleAbon,
    toggleSubVisibleAbon,
    isSubVisibleAbon1,
    toggleSubVisibleAbon1,
    isSubVisibleAbon2,
    toggleSubVisibleAbon2,
    isSubVisibleBalance,
    toggleSubVisibleBalance,
    isSubVisibleBalance1,
    toggleSubVisibleBalance1,
    isSubVisibleBalance2,
    toggleSubVisibleBalance2,
    isSubVisibleNetwork,
    toggleSubVisibleNetwork,
    isSubVisibleNetwork1,
    toggleSubVisibleNetwork1,
    isSubVisibleNetwork2,
    toggleSubVisibleNetwork2,
    isSubVisibleNetwork3,
    toggleSubVisibleNetwork3,
    isSubVisibleNetwork4,
    toggleSubVisibleNetwork4,
    isSubVisibleReport,
    toggleSubVisibleReport,
    isSubVisibleReport1,
    toggleSubVisibleReport1,
    isSubVisibleReport2,
    toggleSubVisibleReport2,
    isSubVisibleReport3,
    toggleSubVisibleReport3,
    isSubVisibleTools,
    toggleSubVisibleTools,
    isSubVisibleTools1,
    toggleSubVisibleTools1,
    isSubVisibleTools2,
    toggleSubVisibleTools2,
    isSubVisibleTools3,
    toggleSubVisibleTools3,
    isSubVisibleSettings,
    toggleSubVisibleSettings,
    isSubVisibleSettings1,
    toggleSubVisibleSettings1,
    isSubVisibleSettings2,
    toggleSubVisibleSettings2
  } = navigationStore;

  const endpoints = {
    main: '/main',
    diagnosticGeneral: '/diagnostic/general',
    diagnosticNSD: '/diagnostic/nsd',
    voltageControl: '/diagnostic/voltage-control',
    subscribers: '/subscribers',
    subscriberManagement: '/subscribers/management',
    balanceGroups: '/balance/groups',
    balanceSummary: '/balance/summary',
    communicationChannels: '/communication/channels',
    channelPassport: '/communication/channel-passport',
    schedule: '/communication/schedule',
    delay: '/communication/delay',
    reports: '/reports',
    tasks: '/reports/tasks',
    executionJournal: '/reports/execution-journal',
    charts: '/tools/charts',
    generalProtocol: '/tools/general-protocol',
    commandManagement: '/tools/command-management',
    lightingControl: '/lighting/control',
    accessRights: '/settings/access-rights',
    systemParameters: '/settings/system-parameters'
  };

  return (
    <><header className={classes.header} onMouseEnter={navigationStyle === "special" ? setIsActive : {}} onMouseLeave={navigationStyle === "special" ? setIsActive : {}}>
      <div className={classes.container}>
      <NavigationTitleMain 
          iconSrc={menuIcon} 
          title="Главное меню" 
          onClick={() => {
            navigationStyle === "new" ? setIsActiveNew() : navigationStyle === "old" ? setIsActive() : {}
          }}
        />
        {(isActiveNew || navigationStyle === "old" || navigationStyle === "special") && (
          <>
        <NavigationTitleMain 
          iconSrc={mainIcon} 
          title="Главная"
          onClick={toggleSubVisibleMain}
          to={endpoints.main}
        />
        <NavigationTitleMain
          isActive={isSubVisibleDiagnostic}
          iconSrc={diagnosticIcon} 
          title="Диагностика" 
          onClick={toggleSubVisibleDiagnostic}
        />
          {isSubVisibleDiagnostic && (
            <>
              <NavigationTitleSub
                iconSrc={diagnosticIcon1} 
                title="Диагностика общая"
                onClick={toggleSubVisibleDiagnostic1}
                to={endpoints.diagnosticGeneral}
              />
              <NavigationTitleSub 
                iconSrc={diagnosticIcon2} 
                title="Диагностика НСД" 
                onClick={toggleSubVisibleDiagnostic2}
                to={endpoints.diagnosticNSD}
              />
              <NavigationTitleSub 
                iconSrc={diagnosticIcon3} 
                title="Контроль напряжения" 
                onClick={toggleSubVisibleDiagnostic3}
                to={endpoints.voltageControl}
              />
            </>
          )}
        <NavigationTitleMain 
          isActive={isSubVisibleAbon}
          iconSrc={abonIcon} 
          title="Абоненты" 
          onClick={toggleSubVisibleAbon}
        />
          {isSubVisibleAbon && (
            <>
              <NavigationTitleSub
                iconSrc={abonIcon1} 
                title="Абоненты" 
                onClick={toggleSubVisibleAbon1}
                to={endpoints.subscribers}
              />
              <NavigationTitleSub 
                iconSrc={abonIcon2} 
                title="Управление абонентами"
                onClick={toggleSubVisibleAbon2}
                to={endpoints.subscriberManagement}
              />
            </>
          )}
        <NavigationTitleMain
          isActive={isSubVisibleBalance}
          iconSrc={balanceIcon} 
          title="Балансы"
          onClick={toggleSubVisibleBalance}
        />
          {isSubVisibleBalance && (
            <>
              <NavigationTitleSub
                iconSrc={balanceIcon1} 
                title="Балансные группы" 
                onClick={toggleSubVisibleBalance1}
                to={endpoints.balanceGroups}
              />
              <NavigationTitleSub 
                iconSrc={balanceIcon2} 
                title="Сводка балансов"
                onClick={toggleSubVisibleBalance2}
                to={endpoints.balanceSummary}
              />
            </>
          )}
        <NavigationTitleMain 
          isActive={isSubVisibleNetwork}
          iconSrc={networkIcon} 
          title="Связь"
          onClick={toggleSubVisibleNetwork}
        />
          {isSubVisibleNetwork && (
            <>
              <NavigationTitleSub
                iconSrc={networkIcon1} 
                title="Каналы связи" 
                onClick={toggleSubVisibleNetwork1}
                to={endpoints.communicationChannels}
              />
              <NavigationTitleSub 
                iconSrc={networkIcon2} 
                title="Паспорт каналов" 
                onClick={toggleSubVisibleNetwork2}
                to={endpoints.channelPassport}
              />
              <NavigationTitleSub 
                iconSrc={networkIcon3} 
                title="Расписание" 
                onClick={toggleSubVisibleNetwork3}
                to={endpoints.schedule}
              />
              <NavigationTitleSub 
                iconSrc={networkIcon4} 
                title="Откладка" 
                onClick={toggleSubVisibleNetwork4}
                to={endpoints.delay}
              />
            </>
          )}
        <NavigationTitleMain 
          isActive={isSubVisibleReport}
          iconSrc={reportIcon} 
          title="Отчеты"
          onClick={toggleSubVisibleReport} 
        />
          {isSubVisibleReport && (
            <>
              <NavigationTitleSub
                iconSrc={reportIcon1} 
                title="Отчеты" 
                onClick={toggleSubVisibleReport1}
                to={endpoints.reports}
              />
              <NavigationTitleSub 
                iconSrc={reportIcon2} 
                title="Задания" 
                onClick={toggleSubVisibleReport2}
                to={endpoints.tasks}
              />
              <NavigationTitleSub 
                iconSrc={reportIcon3} 
                title="Журнал выполнения" 
                onClick={toggleSubVisibleReport3}
                to={endpoints.executionJournal}
              />
            </>
          )}
        <NavigationTitleMain 
          isActive={isSubVisibleTools}
          iconSrc={toolsIcon} 
          title="Инструменты"
          onClick={toggleSubVisibleTools}
        />
          {isSubVisibleTools && (
            <>
              <NavigationTitleSub
                iconSrc={toolsIcon1} 
                title="Графики" 
                onClick={toggleSubVisibleTools1}
                to={endpoints.charts}
              />
              <NavigationTitleSub 
                iconSrc={toolsIcon2} 
                title="Общий протокол" 
                onClick={toggleSubVisibleTools2}
                to={endpoints.generalProtocol}
              />
              <NavigationTitleSub 
                iconSrc={toolsIcon3} 
                title="Управление командами"
                onClick={toggleSubVisibleTools3} 
                to={endpoints.commandManagement}
              />
            </>
          )}
        <NavigationTitleMain 
          iconSrc={lightIcon} 
          title="Управление освещением" 
          onClick={toggleSubVisibleLight}
          to={endpoints.lightingControl}
        />
        <NavigationTitleMain 
          isActive={isSubVisibleSettings}
          iconSrc={settingsIcon} 
          title="Настройки"
          onClick={toggleSubVisibleSettings}
      />
        {isSubVisibleSettings && (
            <>
              <NavigationTitleSub
                iconSrc={settingsIcon} 
                title="Права доступа" 
                onClick={toggleSubVisibleSettings1}
                to={endpoints.accessRights}
              />
              <NavigationTitleSub 
                iconSrc={settingsIcon} 
                title="Параметры системы" 
                onClick={toggleSubVisibleSettings2}
                to={endpoints.systemParameters}
              />
            </>
          )}
        </>
        )}
      </div>

      
    </header></>
  );
});

export default Navigation;
