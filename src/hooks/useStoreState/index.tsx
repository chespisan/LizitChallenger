import { useContext, useState } from "react";
import { useRouter } from "next/navigation";

import { ProductEntity } from "app/domain";
import { IFormInput } from "app/components/form-product/interface";
import { IStoreState } from "app/hooks/useStoreState/interface";
import { SettingsContext } from "app/context/settings-provider";

const storeState: IStoreState = {
  categories: [],
  products: [],
};

export const useStoreState = () => {
  const [state, setState] = useState(storeState);
  const { setShowModal } = useContext(SettingsContext);

  const navigation = useRouter();

  const addInventory = (payload: ProductEntity[]): void => {
    const categories = payload?.reduce((prev: string[], curr) => {
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

  const addProduct = (product: ProductEntity): void => {
    product.id = state.products.length + 1;
    setState({
      ...state,
      products: [product, ...state.products],
    });
    setShowModal();
  };

  const getProduct = (productId: string): ProductEntity | undefined => {
    return state.products?.find(
      (product) => product.id === parseInt(productId)
    );
  };

  const updateProduct = (productId: string, product: IFormInput): void => {
    const updateProducts: any = state?.products.map((item) => {
      if (item.id === parseInt(productId)) {
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

  const deleteProduct = (productId: string): void => {
    const updateProducts: any = state?.products.filter(
      (product) => product.id !== parseInt(productId)
    );
    setState({ ...state, products: updateProducts });
  };

  return {
    addInventory,
    addProduct,
    getProduct,
    updateProduct,
    deleteProduct,
    state,
  };
};
