import { makeAutoObservable } from 'mobx';

class NavigationStore {
  navigationStyle = 'old';

  isActive = true;
  isActiveNew = false;
  isSubVisibleMain = false;
  isSubVisibleLight = false;
  isSubVisibleDiagnostic = false;
  isSubVisibleDiagnostic1 = false;
  isSubVisibleDiagnostic2 = false;
  isSubVisibleDiagnostic3 = false;
  isSubVisibleAbon = false;
  isSubVisibleAbon1 = false;
  isSubVisibleAbon2 = false;
  isSubVisibleBalance = false;
  isSubVisibleBalance1 = false;
  isSubVisibleBalance2 = false;
  isSubVisibleNetwork = false;
  isSubVisibleNetwork1 = false;
  isSubVisibleNetwork2 = false;
  isSubVisibleNetwork3 = false;
  isSubVisibleNetwork4 = false;
  isSubVisibleReport = false;
  isSubVisibleReport1 = false;
  isSubVisibleReport2 = false;
  isSubVisibleReport3 = false;
  isSubVisibleTools = false;
  isSubVisibleTools1 = false;
  isSubVisibleTools2 = false;
  isSubVisibleTools3 = false;
  isSubVisibleSettings = false;
  isSubVisibleSettings1 = false;
  isSubVisibleSettings2 = false;

  constructor() {
    makeAutoObservable(this);
  }

  setNavigationStyle(newStyle: string) {
    this.navigationStyle = newStyle;
  }

  setIsActive = () => {
    this.isActive = !this.isActive;
  };

  setIsActiveNew = () => {
    this.isActiveNew = !this.isActiveNew;
  };

  toggleSubVisibleMain = () => {
    this.isSubVisibleMain = !this.isSubVisibleMain;
  };

  toggleSubVisibleLight = () => {
    this.isSubVisibleLight = !this.isSubVisibleLight;
  };

  toggleSubVisibleDiagnostic = () => {
    this.isSubVisibleDiagnostic = !this.isSubVisibleDiagnostic;
  };

  toggleSubVisibleDiagnostic1 = () => {
    this.isSubVisibleDiagnostic1 = !this.isSubVisibleDiagnostic1;
  };

  toggleSubVisibleDiagnostic2 = () => {
    this.isSubVisibleDiagnostic2 = !this.isSubVisibleDiagnostic2;
  };

  toggleSubVisibleDiagnostic3 = () => {
    this.isSubVisibleDiagnostic3 = !this.isSubVisibleDiagnostic3;
  };

  toggleSubVisibleAbon = () => {
    this.isSubVisibleAbon = !this.isSubVisibleAbon;
  };

  toggleSubVisibleAbon1 = () => {
    this.isSubVisibleAbon1 = !this.isSubVisibleAbon1;
  };

  toggleSubVisibleAbon2 = () => {
    this.isSubVisibleAbon2 = !this.isSubVisibleAbon2;
  };

  toggleSubVisibleBalance = () => {
    this.isSubVisibleBalance = !this.isSubVisibleBalance;
  };

  toggleSubVisibleBalance1 = () => {
    this.isSubVisibleBalance1 = !this.isSubVisibleBalance1;
  };

  toggleSubVisibleBalance2 = () => {
    this.isSubVisibleBalance2 = !this.isSubVisibleBalance2;
  };

  toggleSubVisibleNetwork = () => {
    this.isSubVisibleNetwork = !this.isSubVisibleNetwork;
  };

  toggleSubVisibleNetwork1 = () => {
    this.isSubVisibleNetwork1 = !this.isSubVisibleNetwork1;
  };

  toggleSubVisibleNetwork2 = () => {
    this.isSubVisibleNetwork2 = !this.isSubVisibleNetwork2;
  };

  toggleSubVisibleNetwork3 = () => {
    this.isSubVisibleNetwork3 = !this.isSubVisibleNetwork3;
  };

  toggleSubVisibleNetwork4 = () => {
    this.isSubVisibleNetwork4 = !this.isSubVisibleNetwork4;
  };

  toggleSubVisibleReport = () => {
    this.isSubVisibleReport = !this.isSubVisibleReport;
  };

  toggleSubVisibleReport1 = () => {
    this.isSubVisibleReport1 = !this.isSubVisibleReport1;
  };

  toggleSubVisibleReport2 = () => {
    this.isSubVisibleReport2 = !this.isSubVisibleReport2;
  };

  toggleSubVisibleReport3 = () => {
    this.isSubVisibleReport3 = !this.isSubVisibleReport3;
  };

  toggleSubVisibleTools = () => {
    this.isSubVisibleTools = !this.isSubVisibleTools;
  };

  toggleSubVisibleTools1 = () => {
    this.isSubVisibleTools1 = !this.isSubVisibleTools1;
  };

  toggleSubVisibleTools2 = () => {
    this.isSubVisibleTools2 = !this.isSubVisibleTools2;
  };

  toggleSubVisibleTools3 = () => {
    this.isSubVisibleTools3 = !this.isSubVisibleTools3;
  };

  toggleSubVisibleSettings = () => {
    this.isSubVisibleSettings = !this.isSubVisibleSettings;
  };

  toggleSubVisibleSettings1 = () => {
    this.isSubVisibleSettings1 = !this.isSubVisibleSettings1;
  };

  toggleSubVisibleSettings2 = () => {
    this.isSubVisibleSettings2 = !this.isSubVisibleSettings2;
  };

}

export const navigationStore = new NavigationStore();
