"use client";

import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { ProductEntity } from "app/domain";
import { StoreContext } from "app/context/store-provider";
import { ProductDetailView } from "app/presentation/views";
import { IOptionsSelect } from "app/components/select/interface";
import { IFormInput } from "app/components/form-product/interface";

import {
  IProductDetailContainer,
  IActions,
  IRadioOptions,
} from "app/presentation/containers/product-detail/interface";
import { SettingsContext } from "app/context/settings-provider";

let flag = 0;

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
  const [radioOptions, setRadioOptions] = useState<IRadioOptions[]>([]);
  const [inputImg, setInputImgValue] = useState("");

  const { setShowModal } = useContext(SettingsContext);
  const {
    addProduct,
    getProduct,
    updateProduct,
    state: { categories },
  } = useContext(StoreContext);

  const {
    handleSubmit,
    control,
    setValue,
    formState: { isValid },
  } = useForm<IFormInput>({
    defaultValues: {
      name: "",
      category: "",
      description: "",
      baseRate: "",
    },
  });

  const options: IRadioOptions[] = [
    {
      id: 1,
      checked: false,
      imgPath: "",
      name: "img-1",
      disabled: true,
    },
    {
      id: 2,
      checked: false,
      imgPath: "",
      name: "img-2",
      disabled: true,
    },
    {
      id: 3,
      checked: false,
      imgPath: "",
      name: "img-3",
      disabled: true,
    },
    {
      id: 4,
      checked: false,
      imgPath: "",
      name: "img-4",
      disabled: true,
    },
    {
      id: 5,
      checked: false,
      imgPath: "",
      name: "img-5",
      disabled: true,
    },
  ];

  const goBack = () => {
    setRadioOptions([]);
    setInputImgValue("");
    navigation.back();
  };

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

  const checkURL = (url: string) => {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  };

  const changeStateToEditProduct = () => {
    navigation.replace(`/inventory/${productId}?state=editProduct`);
  };

  const addImgToProduct = () => {
    if (inputImg && flag <= 4) {
      const verify = checkURL(inputImg);
      if (!verify) return;

      const updatedRadioOptions = radioOptions?.map((radio, index) => {
        radio.checked = false;

        if (index === flag) {
          radio.checked = true;
          radio.imgPath = inputImg;
          radio.disabled = false;
        }
        return radio;
      });
      setRadioOptions(updatedRadioOptions);
      setInputImgValue("");
      flag += 1;
    }
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputImgValue(event.target.value);
  };

  const onChangeRadio = (option: IRadioOptions) => {
    const updatedRadioOptions = radioOptions?.map((radio, index) => {
      radio.checked = false;
      if (index + 1 === option.id) {
        radio.checked = true;
      }
      setInputImgValue(radio.imgPath);
      return radio;
    });
    setRadioOptions(updatedRadioOptions);
  };

  const addOrUpdateProduct: SubmitHandler<IFormInput> = (data) => {
    if (params.state === "addProduct") {
      let images: string[] = [];
      let imagePrincipal = "";
      radioOptions?.forEach((option) => {
        if (option.imgPath) {
          if (option.checked) imagePrincipal = option.imgPath;
          images.push(option.imgPath);
        }
      });

      const newProduct: ProductEntity = {
        id: 0,
        title: data.name,
        category: data.category,
        description: data.description,
        price: parseFloat(data.baseRate),
        image: imagePrincipal,
        images,
        rating: {
          rate: 3.6,
          count: 145,
        },
      };

      addProduct(newProduct);
      setRadioOptions([]);
      setInputImgValue("");
      return;
    }
    updateProduct(productId!, data);
  };

  const deleteProduct = () => {
    setShowModal("deleteProduct", { productId });
    navigation.back();
  };

  const generateActions = () => {
    switch (params.state) {
      case "addProduct":
        setActions([
          {
            label: "Guardar",
            onClick: handleSubmit(addOrUpdateProduct),
            color: "primary",
            disabled: !isValid,
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
            onClick: handleSubmit(addOrUpdateProduct),
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
  }, [params.state, isValid]);

  useEffect(() => {
    const currentProduct = getProduct(productId!);

    if (!currentProduct && params.state !== "addProduct")
      navigation.replace("/");
    setProduct(currentProduct);
    setRadioOptions(options);
  }, []);

  return (
    <ProductDetailView
      product={product}
      back={goBack}
      state={params.state}
      control={control}
      optionCategories={optionCategories}
      actions={actions}
      radioOptions={radioOptions!}
      inputImg={inputImg}
      onChangeRadio={onChangeRadio}
      addImgToProduct={addImgToProduct}
      onChangeInput={onChangeInput}
    />
  );
};
