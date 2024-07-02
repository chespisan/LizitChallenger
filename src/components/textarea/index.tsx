import { ITextareaComponent } from "app/components/textarea/interface";

import styles from "app/components/textarea/textarea.module.scss";

export const TextAreaComponent = ({
  disabled,
  label,
  name,
  onChange,
  value,
}: ITextareaComponent) => {
  return (
    <div className={styles["textarea-container"]}>
      <strong>
        <p
          className={`${styles["textarea-container__label"]}
        ${disabled ? styles["textarea-container__label--disabled"] : ""}
        `}
        >
          {label}
        </p>
      </strong>
      <textarea
        className={`
         ${styles["textarea-container__textarea"]}
         ${disabled ? styles["textarea-container__textarea--disabled"] : ""} 
          `}
        name={name}
        onChange={onChange}
        value={value}
        disabled={disabled}
      />
    </div>
  );
};
