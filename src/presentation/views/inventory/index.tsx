"use client";
import { FC, useContext, useEffect } from "react";
import Image from "next/image";

import { StoreContext } from "app/context/store-provider";
import { SettingsContext } from "app/context/settings-provider";
import {
  ButtonComponent,
  InputComponent,
  InventoryListComponent,
} from "app/components";

import iconPlusFolder from "/public/plus-folder.svg";
import iconLizitLogo from "/public/lizit-logo.svg";
import iconSearch from "/public/search.svg";

import styles from "./inventory.module.scss";
import { IInventoryView } from "./interface";

export const InventoryView: FC<IInventoryView> = ({
  products,
  headerTexts,
}) => {
  const { addInventory } = useContext(StoreContext);
  const { setShowModal } = useContext(SettingsContext);

  useEffect(() => {
    addInventory(products);
  }, []);

  return (
    <div className={styles["invoice-view"]}>
      <div className={styles["invoice-view__header"]}>
        <ButtonComponent
          text="Nuevo producto"
          iconPath={iconPlusFolder}
          color="secondary"
          action={setShowModal}
          size="large"
        />

        <Image
          src={iconLizitLogo}
          alt="Lizit - Logo"
          unoptimized
          width={70}
          height={70}
        />
      </div>

      <div className={styles["invoice-view__container-input"]}>
        <div className={styles["invoice-view__input"]}>
          <InputComponent
            iconPath={iconSearch}
            placeholder="Buscar"
            variant="end"
          />
        </div>
      </div>

      <InventoryListComponent data={products} headerTexts={headerTexts} />
    </div>
  );
};
