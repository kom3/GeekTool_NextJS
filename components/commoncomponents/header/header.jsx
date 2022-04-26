import Image from "next/image";
import styles from "./header.module.scss";

const avatar = require("../../../public/images/avatar.svg");
export default function Header() {
  return (
    <div className={styles.header_parent}>
      <div>Task Overview</div>
      <div className={`dfi aic`}>
        <Image src={avatar} width={31} height={31} />
        <div className={`mrgl10`}>Manju</div>
      </div>
    </div>
  );
}
