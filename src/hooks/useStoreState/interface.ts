import { ProductEntity } from "app/domain";

export interface IStoreState {
  categories: string[];
  products: ProductEntity[];
}
