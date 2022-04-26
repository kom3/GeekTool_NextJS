import styles from "./home.module.scss";
import Header from "../header/header";
import Menu from "../menu/menu";
// import Header from "../menu/menu"

export default function Home() {
  return (
    <div className={styles.home_parent}>
      <Header />
      <div className={`df ${styles.flex_wrpr}`}>
        <div>
          <Menu />
        </div>
        <div>Right side</div>
      </div>
    </div>
  );
}
