import { createContext } from "react";
import { useStoreState } from "app/hooks";
import { ProductEntity } from "app/domain";

export interface IStoreContext {
  addInventory: (payload: ProductEntity[]) => void;
  getProduct: (productId: string) => ProductEntity | undefined;
  state: {
    categories: string[];
    products: ProductEntity[];
  };
}

export const StoreContext = createContext<IStoreContext>({
  addInventory: () => {},
  getProduct: () => undefined,
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
