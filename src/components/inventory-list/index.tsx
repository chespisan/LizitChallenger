import { FC, useContext } from "react";
import Image from "next/image";

import { ButtonComponent } from "../button";
import { IInventoryList } from "./interfaces";

import iconTrash from "/public/trash.svg";
import iconFrame from "/public/frame.svg";
import styles from "./inventory-list.module.scss";
import { useRouter } from "next/navigation";
import { SettingsContext } from "app/context/settings-provider";

export const InventoryListComponent: FC<IInventoryList> = ({
  data,
  headerTexts,
}) => {
  const { setShowModal } = useContext(SettingsContext);
  const navigation = useRouter();

  const goToProductDetail = (productId: string, type: string) => {
    navigation.push(`/inventory/${productId}?state=${type}Product`);
  };

  const deleteProduct = (productId: string) => {
    setShowModal("deleteProduct", { productId });
  };

  return (
    <div className={styles["inventory-list__container"]}>
      <div className={styles["inventory-list__header"]}>
        {headerTexts.map((text: string) => (
          <p key={text} className={styles["inventory-list__header-text"]}>
            {text}
          </p>
        ))}
      </div>

      {data.map((product) => (
        <div key={product?.id} className={styles["inventory-list__products"]}>
          <div className={styles["inventory-list__products-img"]}>
            <Image
              src={product.image}
              alt="product - image"
              unoptimized
              width={36}
              height={50}
            />
          </div>
          <p className={styles["inventory-list__title-text"]}>
            {product?.title}
          </p>
          <p className={styles["inventory-list__text"]}>{product?.category}</p>
          <p className={styles["inventory-list__description"]}>
            {product?.description}
          </p>
          <p className={styles["inventory-list__text"]}>${product.price}</p>
          <div className={styles["inventory-list__products-action"]}>
            <ButtonComponent
              text="Ver"
              color="primary"
              action={() => goToProductDetail(product?.id, "view")}
            />

            <ButtonComponent
              variant="only-icon"
              iconPath={iconFrame}
              action={() => goToProductDetail(product?.id, "edit")}
              size="large"
            />

            <ButtonComponent
              variant="only-icon"
              iconPath={iconTrash}
              action={() => deleteProduct(product?.id)}
              size="large"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
