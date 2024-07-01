import { useState } from "react";

import { ProductEntity } from "app/domain";

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

  return {
    addInventory,
    getProduct,
    state,
  };
};
