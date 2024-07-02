import { createContext } from "react";

import { useStoreState } from "app/hooks";
import { IStoreContext } from "app/context/store-provider/interface";

export const StoreContext = createContext<IStoreContext>({
  addInventory: () => {},
  addProduct: () => {},
  updateProduct: () => {},
  getProduct: () => undefined,
  deleteProduct: () => {},
  state: {
    categories: [],
    products: [],
  },
});

export const StoreProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const storeState = useStoreState();

  return (
    <StoreContext.Provider value={storeState}>{children}</StoreContext.Provider>
  );
};
