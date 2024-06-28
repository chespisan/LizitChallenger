import { FC, useEffect, useState } from "react";
import Image from "next/image";

import { IButtonComponent } from "./interfaces";

import styles from "./button.module.scss";

export const ButtonComponent: FC<IButtonComponent> = ({
  action,
  color,
  iconPath,
  size = "medium",
  text,
  variant = "default",
}) => {
  const [sizeIcon, setSizeIcon] = useState<number>();

  useEffect(() => {
    setSizeIcon(size === "large" ? 24 : 34);
  }, [size]);

  return (
    <button
      className={`
        ${styles["button"]} 
        ${styles[`button--${color}`]} 
        ${styles[`button--${variant}`]}
        ${styles[`button--${size}`]}
      `}
      onClick={action}
    >
      {iconPath && (
        <Image
          src={iconPath || ""}
          width={sizeIcon}
          height={sizeIcon}
          alt="Picture of the author"
        />
      )}

      {text}
    </button>
  );
};
