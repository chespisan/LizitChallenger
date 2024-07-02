import { ProductEntity } from "app/domain";
import { IFormInput } from "app/components/form-product/interface";

export interface IStoreContext {
  addInventory: (payload: ProductEntity[]) => void;
  addProduct: (payload: ProductEntity) => void;
  updateProduct: (productId: string, product: IFormInput) => void;
  getProduct: (productId: string) => ProductEntity | undefined;
  deleteProduct: (productId: string) => void;
  state: {
    categories: string[];
    products: ProductEntity[];
  };
}
