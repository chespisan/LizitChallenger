import { createContext } from "react";
import { useStoreState } from "app/hooks";
import { ProductEntity } from "app/domain";
import { IFormInput } from "app/components/form-product/interface";

export interface IStoreContext {
  addInventory: (payload: ProductEntity[]) => void;
  updateProduct: (productId: string, product: IFormInput) => void;
  getProduct: (productId: string) => ProductEntity | undefined;
  state: {
    categories: string[];
    products: ProductEntity[];
  };
}

export const StoreContext = createContext<IStoreContext>({
  addInventory: () => {},
  updateProduct: () => {},
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
