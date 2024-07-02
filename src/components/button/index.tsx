import Image from "next/image";
import { FC, useEffect, useState } from "react";

import { IButtonComponent } from "app/components/button/interfaces";

import styles from "app/components/button/button.module.scss";

export const ButtonComponent: FC<IButtonComponent> = ({
  action,
  color,
  disabled = false,
  iconPath,
  size = "medium",
  text,
  variant = "default",
}) => {
  const [sizeIcon, setSizeIcon] = useState<number>();

  const formatSize = (size: string) => {
    switch (size) {
      case "small":
        return 12;
      case "medium":
        return 24;
      case "large":
        return 34;
      case "x-large":
        return 42;
      default:
        return 24;
    }
  };

  useEffect(() => {
    setSizeIcon(formatSize(size));
  }, [size]);

  return (
    <button
      className={`
        ${styles["button"] || ""} 
        ${styles[`button--${color}`] || ""} 
        ${styles[`button--${variant}`] || ""}
        ${styles[`button--${size}`] || ""}
        ${disabled ? styles[`button--disabled`] : ""}
      `}
      onClick={action}
      disabled={disabled}
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
