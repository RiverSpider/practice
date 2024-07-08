import { useEffect, useState } from 'react';
import classes from './Header.module.css';

const pad = (num: number): string => num < 10 ? `0${num}` : num.toString();

const formatDate = (date: Date): string => {
  const timezoneOffset = date.getTimezoneOffset() / 60;
  const formattedTimezone = timezoneOffset <= 0 ? `+${Math.abs(timezoneOffset)}` : `-${timezoneOffset}`;
  const day = pad(date.getUTCDate());
  const month = pad(date.getUTCMonth() + 1);
  const year = date.getUTCFullYear();
  const hours = pad(date.getUTCHours() - timezoneOffset);
  const minutes = pad(date.getUTCMinutes());
  const seconds = pad(date.getUTCSeconds());

  return `${month}.${day}.${year} ${hours}:${minutes}:${seconds} (UTC ${formattedTimezone})`;
};

export default function Header() {
    const [dateTime, setDateTime] = useState<string>('');

    useEffect(() => {
        const updateDateTime = (): void => {
            const omskTime = new Date().toLocaleString("ru-RU", { timeZone: "Asia/Omsk" });
            const date = new Date(omskTime);
            setDateTime(formatDate(date));
        };
    
        const intervalId = setInterval(updateDateTime, 1000);
    
        return () => clearInterval(intervalId);
      }, []);

  return (
    <header className={classes.header}>
        <div className={classes.container}>
            <div className={classes.logo}></div>
            <div className={classes.page_name}>АРМ ЗАРЯ</div>
        </div>
        <div className={classes.ip_name}>ANTONOVVI</div>

        <div className={classes.container}>
            <div className={classes.icon_search}></div>
            <div className={classes.icon_monitor}></div>
            <div className={classes.icon_question}></div>
            <div className={classes.vertical_bar}></div>
            <div className={classes.icon_time}></div>
            <div className={classes.time}>{dateTime}</div>
            <div className={classes.icon_human}></div>
            <div className={classes.ip_name}>miradmin</div>
            <div className={classes.icon_exit}></div>
        </div>
    </header>
  );
}
