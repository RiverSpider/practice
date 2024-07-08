import { makeAutoObservable } from 'mobx';

class ThemeStore {
  theme = 'light';

  constructor() {
    makeAutoObservable(this);
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', this.theme);
  }

  setTheme(newTheme: string) {
    this.theme = newTheme;
    document.documentElement.setAttribute('data-theme', this.theme);
  }
}

const themeStore = new ThemeStore();
export default themeStore;
