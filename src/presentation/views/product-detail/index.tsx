import Image from "next/image";
import { Controller } from "react-hook-form";

import {
  InputComponent,
  SelectComponent,
  TextAreaComponent,
  ButtonComponent,
} from "app/components";
import { IProductDetailView } from "app/presentation/views/product-detail/interface";

import styles from "app/presentation/views/product-detail/productDetail.module.scss";

import iconLizitLogo from "/public/lizit-logo.svg";
import iconShape from "/public/shape.svg";
import iconSymb from "/public/symb.svg";

export const ProductDetailView = ({
  actions,
  back,
  product,
  state = "addProduct",
  control,
  optionCategories,
}: IProductDetailView) => {
  return (
    <div className={styles["product-detail"]}>
      <div className={styles["product-detail__content"]}>
        <>
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
                    disabled={state === "viewProduct"}
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
                    disabled={state === "viewProduct"}
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
                    disabled={state === "viewProduct"}
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
                    disabled={state === "viewProduct"}
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
        </>

        <div className={styles["product-detail__actions"]}>
          {actions?.map((action) => (
            <ButtonComponent
              key={action.label}
              text={action.label}
              color={action.color}
              action={action.onClick}
              size={action.size}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
