import Image from "next/image";
import { useEffect, useState } from "react";

import { IInputComponent } from "app/components/input/interface";

import styles from "app/components/input/input.module.scss";

export const InputComponent = ({
  iconPath,
  label,
  disabled,
  placeholder,
  onChange,
  value,
  variant,
  sizeIcon,
  name,
  fill,
}: IInputComponent) => {
  const [size, setSize] = useState(0);

  useEffect(() => {
    setSize(sizeIcon === "sm" ? 12 : 22);
  }, [sizeIcon]);

  return (
    <div className={styles["input-container"]}>
      <strong>
        <p
          className={`
          ${styles["input-container__input-label"]}
          ${disabled ? styles["input-container__input-label--disabled"] : ""}
        `}
        >
          {label}
        </p>
      </strong>
      <div
        className={`
        ${styles["input-container__content"]}
        ${disabled ? styles["input-container__content--disabled"] : ""}
        ${fill === "solid" ? styles["input-container__input--solid"] : ""}
      `}
      >
        {variant && iconPath && (
          <Image
            className={`
            ${styles[`input-container__input-icon--${variant}`]}
          `}
            src={iconPath}
            alt="search - icon"
            unoptimized
            width={size}
            height={size}
          />
        )}
        <input
          className={styles["input-container__input"]}
          name={name}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
        />
      </div>
    </div>
  );
};
