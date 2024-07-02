import { IProductDetail } from "app/app/inventory/[productId]/interface";
import { ProductDetailContainer } from "app/presentation/containers";

export default function ProductDetail(props: IProductDetail) {
  const { params, searchParams } = props;

  return (
    <ProductDetailContainer
      productId={params.productId}
      params={searchParams}
    />
  );
}
