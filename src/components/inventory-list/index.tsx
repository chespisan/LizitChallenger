import { FC } from "react";
import Image from "next/image";

import { ButtonComponent } from "../button";
import { IInventoryList } from "./interfaces";

import iconTrash from "/public/trash.svg";
import iconFrame from "/public/frame.svg";
import styles from "./inventory-list.module.scss";

export const InventoryListComponent: FC<IInventoryList> = ({
  dataDetchMock,
  textsHeader,
}) => {
  return (
    <div className={styles["inventory-list__container"]}>
      <div className={styles["inventory-list__header"]}>
        {textsHeader.map((text: string) => (
          <p key={text} className={styles["inventory-list__header-text"]}>
            {text}
          </p>
        ))}
      </div>

      {dataDetchMock.map((product) => (
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
            <ButtonComponent text="Ver" color="primary" action={() => {}} />

            <ButtonComponent
              variant="only-icon"
              iconPath={iconFrame}
              action={() => {}}
            />

            <ButtonComponent
              variant="only-icon"
              iconPath={iconTrash}
              action={() => {}}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
