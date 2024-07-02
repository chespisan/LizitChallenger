import { ISelectComponent } from "app/components/select/interface";

import styles from "app/components/select/select.module.scss";

export const SelectComponent = ({
  label,
  options,
  onChange,
  name,
  value,
  disabled,
}: ISelectComponent) => {
  return (
    <div className={styles["select-container"]}>
      <strong>
        <p
          className={`
          ${styles["select-container__select-label"]}
          ${disabled ? styles["select-container__select-label--disabled"] : ""}
        `}
        >
          {label}
        </p>
      </strong>
      <div className={styles["select-container__content"]}>
        <select
          className={`
            ${styles["select-container__select"]}
            ${disabled ? styles["select-container__select--disabled"] : ""}
            `}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
        >
          <option value="default"></option>

          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
