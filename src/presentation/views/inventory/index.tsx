import Image from "next/image";

import {
  ButtonComponent,
  InputComponent,
  InventoryListComponent,
} from "app/components";

import { IInventoryView } from "app/presentation/views/inventory/interface";

import styles from "app/presentation/views/inventory/inventory.module.scss";

import iconPlusFolder from "/public/plus-folder.svg";
import iconLizitLogo from "/public/lizit-logo.svg";
import iconSearch from "/public/search.svg";

export const InventoryView = ({
  products,
  headerTexts,
  setShowModal,
}: IInventoryView) => {
  return (
    <div className={styles["invoice-view"]}>
      <div className={styles["invoice-view__header"]}>
        <ButtonComponent
          text="Nuevo producto"
          iconPath={iconPlusFolder}
          color="secondary"
          action={setShowModal}
          size="medium"
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
