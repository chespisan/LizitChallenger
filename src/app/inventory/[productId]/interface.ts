export interface IProductDetail {
  params: {
    productId: string;
  };
  searchParams: {
    state: "addProduct" | "viewProduct" | "editProduct";
  };
}
