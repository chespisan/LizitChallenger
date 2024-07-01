"use client";
import { useContext, useEffect, useState } from "react";

import { ProductEntity } from "app/domain";
import { StoreContext } from "app/context/store-provider";
import { ProductDetailView } from "app/presentation/views";
import { useRouter } from "next/navigation";

export interface IProductDetailContainer {
  productId: string;
  params: {
    state: "addProduct" | "viewProduct" | "editProduct";
  };
}

export const ProductDetailContainer = ({
  productId,
  params,
}: IProductDetailContainer) => {
  const navigation = useRouter();
  const { getProduct } = useContext(StoreContext);
  const [product, setProduct] = useState<ProductEntity>();

  useEffect(() => {
    const currentProduct = getProduct(productId);

    if (!currentProduct && params.state !== "addProduct")
      navigation.replace("/");
    setProduct(currentProduct);
  }, []);

  const goBack = () => navigation.back();

  return (
    <ProductDetailView product={product} back={goBack} state={params.state} />
  );
};
