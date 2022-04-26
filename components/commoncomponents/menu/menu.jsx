import Image from "next/image";
import styles from "./menu.module.scss";
import { useState } from "react";

const menu_img = require("../../../public/images/Vectormenu.svg");
const library_img = require("../../../public/images/Vectorlibrary.svg");
const medal_img = require("../../../public/images/Vectormedal.svg");
const clipboard_img = require("../../../public/images/Vectorclipboard.svg");

export default function Menu() {
  const [activeMenuItem, activateMenuItem] = useState("tasktracker");
  return (
    <div className={`${styles.menu_wrpr} df fdircol jcsa`}>
      <div>
        <Image src={menu_img} height={39} width={25} />
      </div>
      <div
        className={activeMenuItem == "tasktracker" ? styles.active : ""}
        onClick={() => activateMenuItem("tasktracker")}
      >
        <Image src={clipboard_img} height={39} width={25} />
      </div>
      <div
        className={activeMenuItem == "library" ? styles.active : ""}
        onClick={() => activateMenuItem("library")}
      >
        <Image src={library_img} height={39} width={25} />
      </div>
      <div
        className={activeMenuItem == "skilldev" ? styles.active : ""}
        onClick={() => activateMenuItem("skilldev")}
      >
        <Image src={medal_img} height={37} width={25} />
      </div>
    </div>
  );
}
