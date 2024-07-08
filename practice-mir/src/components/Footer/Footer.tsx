import classes from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={classes.footer}>
        <div className={classes.container}>
            <div className={classes.logo}></div>
            <div className={classes.info}>По заказу *****. Контактная информация: Тел: +79999999999</div>
        </div>
    </footer>
  );
}
