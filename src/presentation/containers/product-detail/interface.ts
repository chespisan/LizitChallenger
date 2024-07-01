import { TButtonColor, TButtonSize } from "app/components/button/interfaces";

export interface IProductDetailContainer {
  productId: string;
  params: {
    state: "addProduct" | "viewProduct" | "editProduct";
  };
}

export interface IActions {
  label: string;
  onClick: () => void;
  color: TButtonColor;
  disabled?: boolean;
  size: TButtonSize;
}
