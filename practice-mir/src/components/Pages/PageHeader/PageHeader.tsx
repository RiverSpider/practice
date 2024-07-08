import Chip from './Chip';
import classes from './PageHeader.module.css';

import mainIcon from '../../../assets/images/main.png';

import lightIcon from '../../../assets/images/light.png';
import settingsIcon from '../../../assets/images/logo.png';

import diagnosticIcon1 from '../../../assets/images/diagnostic1.png';
import diagnosticIcon2 from '../../../assets/images/diagnostic2.png';
import diagnosticIcon3 from '../../../assets/images/diagnostic3.png';
import abonIcon1 from '../../../assets/images/aboniments1.png';
import abonIcon2 from '../../../assets/images/aboniments2.png';
import balanceIcon1 from '../../../assets/images/balance1.png';
import balanceIcon2 from '../../../assets/images/balance1.svg';
import networkIcon1 from '../../../assets/images/network1.png';
import networkIcon2 from '../../../assets/images/network2.svg';
import networkIcon3 from '../../../assets/images/network3.png';
import networkIcon4 from '../../../assets/images/network4.png';
import reportIcon1 from '../../../assets/images/document1.png';
import reportIcon2 from '../../../assets/images/document2.png';
import reportIcon3 from '../../../assets/images/document3.png';
import toolsIcon1 from '../../../assets/images/tools1.png';
import toolsIcon2 from '../../../assets/images/tools2.png';
import toolsIcon3 from '../../../assets/images/tools3.png';
import { useLocation } from 'react-router-dom';
import { navigationStore } from '../../../stores/NavigationStore';
import { observer } from 'mobx-react-lite';

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
  

  const PageHeader = observer(() => {

    const location = useLocation();

    const { 
      isSubVisibleMain,
      toggleSubVisibleMain,
      isSubVisibleLight,
      toggleSubVisibleLight,
      isSubVisibleDiagnostic1,
      toggleSubVisibleDiagnostic1,
      isSubVisibleDiagnostic2,
      toggleSubVisibleDiagnostic2,
      isSubVisibleDiagnostic3,
      toggleSubVisibleDiagnostic3,
      isSubVisibleAbon1,
      toggleSubVisibleAbon1,
      isSubVisibleAbon2,
      toggleSubVisibleAbon2,
      isSubVisibleBalance1,
      toggleSubVisibleBalance1,
      isSubVisibleBalance2,
      toggleSubVisibleBalance2,
      isSubVisibleNetwork1,
      toggleSubVisibleNetwork1,
      isSubVisibleNetwork2,
      toggleSubVisibleNetwork2,
      isSubVisibleNetwork3,
      toggleSubVisibleNetwork3,
      isSubVisibleNetwork4,
      toggleSubVisibleNetwork4,
      isSubVisibleReport1,
      toggleSubVisibleReport1,
      isSubVisibleReport2,
      toggleSubVisibleReport2,
      isSubVisibleReport3,
      toggleSubVisibleReport3,
      isSubVisibleTools1,
      toggleSubVisibleTools1,
      isSubVisibleTools2,
      toggleSubVisibleTools2,
      isSubVisibleTools3,
      toggleSubVisibleTools3,
      isSubVisibleSettings1,
      toggleSubVisibleSettings1,
      isSubVisibleSettings2,
      toggleSubVisibleSettings2
    } = navigationStore;

    return (
      <>
        <div className={classes.container}>
          <Chip iconSrc={mainIcon} title={"Главная"} isActive={isSubVisibleMain} to={endpoints.main} onToggleActive={toggleSubVisibleMain} isEndpointActive={location.pathname === endpoints.main} />
          <Chip iconSrc={diagnosticIcon1} title={"Диагностика общая"} isActive={isSubVisibleDiagnostic1} to={endpoints.diagnosticGeneral} onToggleActive={toggleSubVisibleDiagnostic1} isEndpointActive={location.pathname === endpoints.diagnosticGeneral} />
          <Chip iconSrc={diagnosticIcon2} title={"Диагностика НСД"} isActive={isSubVisibleDiagnostic2} to={endpoints.diagnosticNSD} onToggleActive={toggleSubVisibleDiagnostic2} isEndpointActive={location.pathname === endpoints.diagnosticNSD} />
          <Chip iconSrc={diagnosticIcon3} title={"Контроль напряжения"} isActive={isSubVisibleDiagnostic3} to={endpoints.voltageControl} onToggleActive={toggleSubVisibleDiagnostic3} isEndpointActive={location.pathname === endpoints.voltageControl} />
          <Chip iconSrc={abonIcon1} title={"Абоненты"} isActive={isSubVisibleAbon1} to={endpoints.subscribers} onToggleActive={toggleSubVisibleAbon1} isEndpointActive={location.pathname === endpoints.subscribers} />
          <Chip iconSrc={abonIcon2} title={"Управление абонентами"} isActive={isSubVisibleAbon2} to={endpoints.subscriberManagement} onToggleActive={toggleSubVisibleAbon2} isEndpointActive={location.pathname === endpoints.subscriberManagement} />
          <Chip iconSrc={balanceIcon1} title={"Балансные группы"} isActive={isSubVisibleBalance1} to={endpoints.balanceGroups} onToggleActive={toggleSubVisibleBalance1} isEndpointActive={location.pathname === endpoints.balanceGroups} />
          <Chip iconSrc={balanceIcon2} title={"Сводка балансов"} isActive={isSubVisibleBalance2} to={endpoints.balanceSummary} onToggleActive={toggleSubVisibleBalance2} isEndpointActive={location.pathname === endpoints.balanceSummary} />
          <Chip iconSrc={networkIcon1} title={"Каналы связи"} isActive={isSubVisibleNetwork1} to={endpoints.communicationChannels} onToggleActive={toggleSubVisibleNetwork1} isEndpointActive={location.pathname === endpoints.communicationChannels} />
          <Chip iconSrc={networkIcon2} title={"Паспорт каналов"} isActive={isSubVisibleNetwork2} to={endpoints.channelPassport} onToggleActive={toggleSubVisibleNetwork2} isEndpointActive={location.pathname === endpoints.channelPassport} />
          <Chip iconSrc={networkIcon3} title={"Расписание"} isActive={isSubVisibleNetwork3} to={endpoints.schedule} onToggleActive={toggleSubVisibleNetwork3} isEndpointActive={location.pathname === endpoints.schedule} />
          <Chip iconSrc={networkIcon4} title={"Откладка"} isActive={isSubVisibleNetwork4} to={endpoints.delay} onToggleActive={toggleSubVisibleNetwork4} isEndpointActive={location.pathname === endpoints.delay} />
          <Chip iconSrc={reportIcon1} title={"Отчеты"} isActive={isSubVisibleReport1} to={endpoints.reports} onToggleActive={toggleSubVisibleReport1} isEndpointActive={location.pathname === endpoints.reports} />
          <Chip iconSrc={reportIcon2} title={"Задания"} isActive={isSubVisibleReport2} to={endpoints.tasks} onToggleActive={toggleSubVisibleReport2} isEndpointActive={location.pathname === endpoints.tasks} />
          <Chip iconSrc={reportIcon3} title={"Журнал выполнения"} isActive={isSubVisibleReport3} to={endpoints.executionJournal} onToggleActive={toggleSubVisibleReport3} isEndpointActive={location.pathname === endpoints.executionJournal} />
          <Chip iconSrc={toolsIcon1} title={"Графики"} isActive={isSubVisibleTools1} to={endpoints.charts} onToggleActive={toggleSubVisibleTools1} isEndpointActive={location.pathname === endpoints.charts} />
          <Chip iconSrc={toolsIcon2} title={"Общий протокол"} isActive={isSubVisibleTools2} to={endpoints.generalProtocol} onToggleActive={toggleSubVisibleTools2} isEndpointActive={location.pathname === endpoints.generalProtocol} />
          <Chip iconSrc={toolsIcon3} title={"Управление командами"} isActive={isSubVisibleTools3} to={endpoints.commandManagement} onToggleActive={toggleSubVisibleTools3} isEndpointActive={location.pathname === endpoints.commandManagement} />
          <Chip iconSrc={lightIcon} title={"Управление освещением"} isActive={isSubVisibleLight} to={endpoints.lightingControl} onToggleActive={toggleSubVisibleLight} isEndpointActive={location.pathname === endpoints.lightingControl} />
          <Chip iconSrc={settingsIcon} title={"Права доступа"} isActive={isSubVisibleSettings1} to={endpoints.accessRights} onToggleActive={toggleSubVisibleSettings1} isEndpointActive={location.pathname === endpoints.accessRights} />
          <Chip iconSrc={settingsIcon} title={"Параметры системы"} isActive={isSubVisibleSettings2} to={endpoints.systemParameters} onToggleActive={toggleSubVisibleSettings2} isEndpointActive={location.pathname === endpoints.systemParameters} />
        </div>
        <div className={classes.line}></div>
      </>
    );
  });

  export default PageHeader;