import Image from "next/image";

import styles from "./input.module.scss";
import { useEffect, useState } from "react";

export type TInputVariants = "start" | "end";
export type TInputIconSize = "sm" | "md";

export interface IInputComponent {
  iconPath?: string;
  label?: string;
  variant?: TInputVariants;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  sizeIcon?: TInputIconSize;
  name?: any;
  disabled?: boolean;
}

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
        ${styles["input-container__content--disabled"]}
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
