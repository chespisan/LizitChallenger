import Image from "next/image";

import iconSearch from "/public/search.svg";
import styles from "./input.module.scss";

export const InputComponent = () => {
  return (
    <div className={styles["container"]}>
      <input className={styles["container__input"]} placeholder="buscar" />
      <Image
        src={iconSearch}
        alt="search - icon"
        unoptimized
        width={26}
        height={26}
      />
    </div>
  );
};
