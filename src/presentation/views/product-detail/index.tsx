"use client";
import Image from "next/image";

import { ProductEntity } from "app/domain";

import styles from "app/presentation/views/product-detail/productDetail.module.scss";

import iconLizitLogo from "/public/lizit-logo.svg";
import iconShape from "/public/shape.svg";
import iconSymb from "/public/symb.svg";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import {
  InputComponent,
  SelectComponent,
  TextAreaComponent,
  ButtonComponent,
} from "app/components";
import { IOptionsSelect } from "app/components/select/interface";
import { StoreContext } from "app/context/store-provider";
import { useContext, useEffect, useState } from "react";

interface IFormInput {
  name: string;
  category: string;
  description: string;
  baseRate: string;
}

export interface IProductDetailView {
  back: () => void;
  product?: ProductEntity;
  state?: "addProduct" | "viewProduct" | "editProduct";
}

export const ProductDetailView = ({
  back,
  product,
  state = "addProduct",
}: IProductDetailView) => {
  const {
    state: { categories },
  } = useContext(StoreContext);
  const [optionCategories, setOptionCategories] = useState<IOptionsSelect[]>(
    []
  );
  const { handleSubmit, control, setValue } = useForm<IFormInput>({
    defaultValues: {
      name: "",
      category: "",
      description: "",
      baseRate: "",
    },
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  const formatCategories = () => {
    const response = categories.map((category) => ({
      label: category,
      value: category,
    }));
    setOptionCategories(response);
  };

  const setInfoFields = () => {
    if (product) {
      const { title, category, description, price } = product;
      setValue("name", title);
      setValue("category", category);
      setValue("description", description);
      setValue("baseRate", price.toString());
    }
  };

  useEffect(() => {
    console.log("state: ", state);

    formatCategories();
  }, [categories]);

  useEffect(() => {
    setInfoFields();
  }, [product]);

  return (
    <div className={styles["product-detail"]}>
      <div className={styles["product-detail__content"]}>
        {state !== "addProduct" && (
          <div className={styles["product-detail__header"]}>
            <div className={styles["product-detail__title"]}>
              <div
                className={styles["product-detail__back-arrow"]}
                onClick={back}
              >
                <Image
                  src={iconShape}
                  alt="Lizit - Logo"
                  unoptimized
                  width={8}
                  height={8}
                />
              </div>
              <h1 className={styles["product-detail__title-text"]}>
                {product?.title}
              </h1>
            </div>
            <Image
              src={iconLizitLogo}
              alt="Lizit - Logo"
              unoptimized
              width={70}
              height={70}
            />
          </div>
        )}

        <div className={styles["product-detail__form"]}>
          <form className={styles["product-detail__fields"]}>
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
                  disabled={true}
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
                  disabled={true}
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
                  disabled={true}
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
                  disabled={true}
                  variant="start"
                  sizeIcon="sm"
                  name={name}
                  onChange={onChange}
                  value={value}
                />
              )}
            />
          </form>

          <div className={styles["product-detail__box-img"]}>
            <h6>Imágenes</h6>

            <p>Añada los links de las imágenes relacionadas al producto.</p>

            <div>
              {/* <InputComponent /> */}
              <ButtonComponent text="Agregar" action={() => {}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
