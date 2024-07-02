"use client";

import { useContext } from "react";

import { ProductDetailContainer } from "app/presentation/containers";
import { SettingsContext } from "app/context/settings-provider";
import { StoreContext } from "app/context/store-provider";
import { ButtonComponent } from "app/components";

import styles from "app/components/modal/modal.module.scss";

import iconClose from "/public/close.svg";

export const ModalComponent = () => {
  const { state, setShowModal } = useContext(SettingsContext);
  const { deleteProduct } = useContext(StoreContext);

  const showModal = () => setShowModal();

  const handleDeleteProduct = () => {
    deleteProduct(state.info?.productId);
    setShowModal();
  };

  if (!state.showModal) return null;

  return (
    <div className={styles["modal-container"]}>
      <div
        className={`
        ${styles["modal-container__card"]}
        ${
          state.type === "deleteProduct"
            ? styles["modal-container__card--delete-product"]
            : ""
        }
      `}
      >
        <div
          className={`
          ${styles["modal-container__action-close"]}
          ${
            state.type === "deleteProduct"
              ? styles["modal-container__action-close--delete-product"]
              : ""
          }
        `}
        >
          <ButtonComponent
            iconPath={iconClose}
            variant="icon"
            action={showModal}
            size="large"
          />
        </div>
        {state?.type === "deleteProduct" ? (
          <div className={styles["modal-container__delete-product"]}>
            <h2 className={styles["modal-container__title"]}>
              ¿Está seguro que desea eliminar el producto?
            </h2>
            <div className={styles["modal-container__actions-delete-product"]}>
              <ButtonComponent
                color="outline"
                text="Cancelar"
                action={showModal}
                size="x-large"
              />
              <ButtonComponent
                color="danger"
                text="Confirmar"
                action={handleDeleteProduct}
                size="x-large"
              />
            </div>
          </div>
        ) : (
          <ProductDetailContainer params={{ state: "addProduct" }} />
        )}
      </div>
    </div>
  );
};
