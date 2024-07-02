import { ProductEntity } from "app/domain";

export interface IInventoryView {
  headerTexts: string[];
  products: ProductEntity[];
  setShowModal: () => void;
}
