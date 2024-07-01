"use client";

import { useContext, useEffect, useState } from "react";

import iconSymb from "/public/symb.svg";
import iconClose from "/public/close.svg";

import styles from "./modal.module.scss";

import { SettingsContext } from "app/context/settings-provider";
import { InputComponent } from "../input";
import { ButtonComponent } from "../button";
import { SelectComponent } from "../select";
import { StoreContext } from "app/context/store-provider";
import { IOptionsSelect } from "../select/interface";
import { TextAreaComponent } from "../textarea";

import { useForm, SubmitHandler, Controller } from "react-hook-form";

interface IFormInput {
  name: string;
  category: string;
  description: string;
  baseRate: string;
}

export const ModalComponent = () => {
  const { state, setShowModal } = useContext(SettingsContext);
  const {
    state: { categories },
  } = useContext(StoreContext);
  const [optionCategories, setOptionCategories] = useState<IOptionsSelect[]>(
    []
  );
  const { handleSubmit, control } = useForm<IFormInput>({
    defaultValues: {
      name: "",
      category: "",
      description: "",
      baseRate: "",
    },
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  const handleFormatCategories = () => {
    const response = categories.map((category) => ({
      label: category,
      value: category,
    }));
    setOptionCategories(response);
  };

  useEffect(() => {
    handleFormatCategories();
  }, [categories]);

  if (!state.showModal) return null;

  return (
    <div className={styles["modal-container"]}>
      <div className={styles["modal-container__form-product"]}>
        <div className={styles["modal-container__action-close"]}>
          <ButtonComponent
            iconPath={iconClose}
            variant="icon"
            action={setShowModal}
            size="small"
          />
        </div>
        <div className={styles["modal-container__content"]}>
          <form className={styles["modal-container__fields"]}>
            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={({ field: { name, onChange, value } }) => (
                <InputComponent
                  label="Nombre*"
                  name={name}
                  onChange={onChange}
                  value={value}
                />
              )}
            />

            <Controller
              name="category"
              control={control}
              rules={{ required: true }}
              render={({ field: { name, onChange, value } }) => (
                <SelectComponent
                  label="Categoría*"
                  options={optionCategories}
                  name={name}
                  onChange={onChange}
                  value={value}
                />
              )}
            />

            <Controller
              name="description"
              control={control}
              rules={{ required: true }}
              render={({ field: { name, onChange, value } }) => (
                <TextAreaComponent
                  label="Descripción"
                  name={name}
                  onChange={onChange}
                  value={value}
                />
              )}
            />

            <Controller
              name="baseRate"
              control={control}
              rules={{ required: true }}
              render={({ field: { name, onChange, value } }) => (
                <InputComponent
                  label="Tarifa base*"
                  iconPath={iconSymb}
                  variant="start"
                  sizeIcon="sm"
                  name={name}
                  onChange={onChange}
                  value={value}
                />
              )}
            />
          </form>

          <div className={styles["modal-container__box-img"]}>
            <h6>Imágenes</h6>

            <p>Añada los links de las imágenes relacionadas al producto.</p>

            <div>
              {/* <InputComponent /> */}
              <ButtonComponent text="Agregar" action={() => {}} />
            </div>
          </div>
        </div>
        <div className={styles["modal-container__action-save"]}>
          <ButtonComponent
            text="Guardar"
            action={handleSubmit(onSubmit)}
            color="secondary"
          />
        </div>
      </div>
    </div>
  );
};
