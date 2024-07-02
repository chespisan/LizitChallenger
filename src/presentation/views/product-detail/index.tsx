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
  radioOptions,
  inputImg,
  onChangeRadio,
  onChangeInput,
  addImgToProduct,
}: IProductDetailView) => {
  return (
    <div
      className={`
      ${styles["product-detail"]}
      ${state === "addProduct" ? styles["product-detail--modal"] : ""}
    `}
    >
      <div
        className={`
      ${styles["product-detail__content"]}
      ${
        state === "addProduct"
          ? styles["product-detail__content--modal"]
          : "lol"
      }  
      `}
      >
        <div className={styles["product-detail__box-up"]}>
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
            {state === "addProduct" ? (
              <div className={styles["product-detail__box-img"]}>
                <h6 className={styles["product-detail__title-box"]}>
                  Imágenes
                </h6>

                <p>Añada los links de las imágenes relacionadas al producto.</p>

                <div className={styles["product-detail__add-img"]}>
                  <div className={styles["product-detail__input"]}>
                    <InputComponent
                      fill="solid"
                      onChange={(e) => onChangeInput(e)}
                      value={inputImg}
                    />
                  </div>
                  <ButtonComponent
                    color="primary"
                    text="Agregar"
                    action={addImgToProduct}
                  />
                </div>

                <div className={styles["product-detail__box-img-principal"]}>
                  <p>Selecciona la imagen principal</p>

                  <form className={styles["product-detail__box-img-form"]}>
                    {radioOptions.map((radio) => (
                      <div className={styles["product-detail__box-radio"]}>
                        <input
                          type="radio"
                          name={radio.name}
                          disabled={radio.disabled}
                          checked={radio.checked}
                          onChange={() => onChangeRadio(radio)}
                        />
                        <div
                          className={`
                         ${styles["product-detail__box-radio-fake"]}
                         ${
                           radio.checked
                             ? styles["product-detail__box-radio--checked"]
                             : ""
                         }
                         `}
                        >
                          {radio?.imgPath && (
                            <Image
                              src={radio.imgPath}
                              alt="Img - product"
                              unoptimized
                              width={40}
                              height={40}
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </form>
                </div>
              </div>
            ) : (
              <div className={styles["product-detail__container-imgs"]}>
                <Image
                  className={styles["product-detail__img-principal"]}
                  src={product?.image || ""}
                  alt="Lizit - Logo"
                  unoptimized
                  width={300}
                  height={200}
                />
                <div className={styles["product-detail__img-gallery"]}>
                  {product?.images?.map((image) => (
                    <Image
                      className={styles["product-detail__img-principal"]}
                      src={image}
                      alt="Lizit - Logo"
                      unoptimized
                      width={60}
                      height={60}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className={styles["product-detail__actions"]}>
          {actions?.map((action) => (
            <ButtonComponent
              key={action.label}
              text={action.label}
              color={action.color}
              action={action.onClick}
              size={action.size}
              disabled={action.disabled}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
