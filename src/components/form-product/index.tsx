import { useContext, useEffect, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

import {
  InputComponent,
  SelectComponent,
  TextAreaComponent,
} from "app/components";
import {
  IFormInput,
  IFormProduct,
} from "app/components/form-product/interface";
import { IOptionsSelect } from "app/components/select/interface";
import { StoreContext } from "app/context/store-provider";
import styles from "app/components/form-product/formProduct.module.scss";

import iconSymb from "/public/symb.svg";

export const FormProductComponent = ({ action }: IFormProduct) => {
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

  const handleFormatCategories = () => {
    const response = categories.map((category) => ({
      label: category,
      value: category,
    }));
    setOptionCategories(response);
  };

  const onSubmit: SubmitHandler<IFormInput> = (data) => action(data);

  useEffect(() => {
    handleFormatCategories();
  }, [categories]);

  return (
    <form className={styles["form-product"]} onSubmit={handleSubmit(onSubmit)}>
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
      <button type="submit">Submit</button>
    </form>
  );
};
