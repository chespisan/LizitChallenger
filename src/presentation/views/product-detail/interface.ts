import { Control } from "react-hook-form";

import { ProductEntity } from "app/domain";
import { IOptionsSelect } from "app/components/select/interface";
import { IFormInput } from "app/components/form-product/interface";
import {
  IActions,
  IRadioOptions,
} from "app/presentation/containers/product-detail/interface";

export interface IGenericType {
  [key: string]: string;
}

export interface IProductDetailView {
  back: () => void;
  product?: ProductEntity;
  state?: "addProduct" | "viewProduct" | "editProduct";
  control: Control<IFormInput, IGenericType>;
  optionCategories: IOptionsSelect[];
  actions: IActions[];
  radioOptions: IRadioOptions[];
  inputImg: string;
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeRadio: (option: IRadioOptions) => void;
  addImgToProduct: () => void;
}
