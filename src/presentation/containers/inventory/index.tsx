"use client";

import { useContext, useEffect } from "react";

import { ProductEntity } from "app/domain";
import { SettingsContext } from "app/context/settings-provider";
import { StoreContext } from "app/context/store-provider";
import { InventoryView } from "app/presentation/views";

const headerTexts = [
  "Foto",
  "Nombre",
  "Categoría",
  "Descripción",
  "Tarifa base",
  "",
];

export const InventoryContainer = ({ products }: any) => {
  const {
    addInventory,
    state: { products: productstState },
  } = useContext(StoreContext);
  const { setShowModal } = useContext(SettingsContext);

  const compareArrayProducts = (a: ProductEntity[], b: ProductEntity[]) => {
    return (
      a.length === b.length && a.every((element, index) => element === b[index])
    );
  };

  useEffect(() => {
    if (productstState.length && products) {
      const res = compareArrayProducts(products, productstState);
      if (!res) {
        addInventory(productstState);
        return;
      }
    }
    addInventory(products);
  }, []);

  return (
    <InventoryView
      products={productstState.length ? productstState : products}
      headerTexts={headerTexts}
      setShowModal={setShowModal}
    />
  );
};
