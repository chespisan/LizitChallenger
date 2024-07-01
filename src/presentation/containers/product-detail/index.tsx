"use client";
import { useContext, useEffect, useState } from "react";

import { ProductEntity } from "app/domain";
import { StoreContext } from "app/context/store-provider";
import { ProductDetailView } from "app/presentation/views";
import { useRouter } from "next/navigation";
import { IOptionsSelect } from "app/components/select/interface";
import { IFormInput } from "app/components/form-product/interface";
import { SubmitHandler, useForm } from "react-hook-form";

import { IProductDetailContainer, IActions } from "./interface";

export const ProductDetailContainer = ({
  productId,
  params,
}: IProductDetailContainer) => {
  const navigation = useRouter();
  const [product, setProduct] = useState<ProductEntity>();
  const [optionCategories, setOptionCategories] = useState<IOptionsSelect[]>(
    []
  );
  const [actions, setActions] = useState<IActions[]>([]);

  const {
    getProduct,
    updateProduct,
    state: { categories, products },
  } = useContext(StoreContext);

  const { handleSubmit, control, setValue } = useForm<IFormInput>({
    defaultValues: {
      name: "",
      category: "",
      description: "",
      baseRate: "",
    },
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    updateProduct(productId, data);
  };

  const goBack = () => navigation.back();

  const formatCategories = () => {
    const response = categories.map((category) => ({
      label: category,
      value: category,
    }));
    setOptionCategories(response);
  };

  const setInfoFields = () => {
    if (product) {
      const { title, category, description, price } = product;
      setValue("name", title);
      setValue("category", category);
      setValue("description", description);
      setValue("baseRate", price.toString());
    }
  };

  const deleteProduct = () => {};
  const changeStateToEditProduct = () => {
    navigation.replace(`/inventory/${productId}?state=editProduct`);
  };
  const addProduct = () => {};

  const generateActions = () => {
    switch (params.state) {
      case "addProduct":
        setActions([
          {
            label: "Guardar",
            onClick: addProduct,
            color: "primary",
            disabled: true,
            size: "x-large",
          },
        ]);
        return;
      case "viewProduct":
        setActions([
          {
            label: "Volver",
            onClick: goBack,
            color: "outline",
            size: "x-large",
          },
          {
            label: "Eliminar",
            onClick: deleteProduct,
            color: "danger",
            size: "x-large",
          },
          {
            label: "Editar",
            onClick: changeStateToEditProduct,
            color: "secondary",
            size: "x-large",
          },
        ]);
        return;
      case "editProduct":
        setActions([
          {
            label: "Cancelar",
            onClick: goBack,
            color: "outline",
            size: "x-large",
          },
          {
            label: "Guardar",
            onClick: handleSubmit(onSubmit),
            color: "secondary",
            size: "x-large",
          },
        ]);
        return;
    }
  };

  useEffect(() => {
    formatCategories();
  }, [categories]);

  useEffect(() => {
    setInfoFields();
  }, [product]);

  useEffect(() => {
    generateActions();
  }, [params.state]);

  useEffect(() => {
    const currentProduct = getProduct(productId);

    if (!currentProduct && params.state !== "addProduct")
      navigation.replace("/");
    setProduct(currentProduct);
  }, []);

  return (
    <ProductDetailView
      product={product}
      back={goBack}
      state={params.state}
      control={control}
      optionCategories={optionCategories}
      actions={actions}
    />
  );
};
