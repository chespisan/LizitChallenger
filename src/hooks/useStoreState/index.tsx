import { useState } from "react";

import { ProductEntity } from "app/domain";
import { IFormInput } from "app/components/form-product/interface";
import { useRouter } from "next/navigation";

export interface IStoreState {
  categories: string[];
  products: ProductEntity[];
}

const storeState: IStoreState = {
  categories: [],
  products: [],
};

export const useStoreState = () => {
  const [state, setState] = useState(storeState);
  const navigation = useRouter();

  const addInventory = (payload: ProductEntity[]): void => {
    const categories = payload.reduce((prev: string[], curr) => {
      if (prev.includes(curr.category)) {
        return prev;
      }
      prev.push(curr.category);
      return prev;
    }, []);
    setState({
      ...state,
      products: [...payload],
      categories,
    });
  };

  const getProduct = (productId: string): ProductEntity | undefined => {
    return state.products.find((product) => product.id === parseInt(productId));
  };

  const updateProduct = (productId: string, product: IFormInput): void => {
    const updateProducts: any = state.products.map((item) => {
      if (item.id === parseInt(productId)) {
        // console.log("Match ", item);
        item = {
          ...item,
          title: product.name,
          category: product.category,
          description: product.description,
          price: parseFloat(product.baseRate),
        };
      }
      return item;
    });
    setState({ ...state, products: updateProducts });
    navigation.back();
  };

  return {
    addInventory,
    getProduct,
    updateProduct,
    state,
  };
};
