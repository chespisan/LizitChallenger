import { ProductService } from "app/services";

const productService = new ProductService();

export async function GET() {
  const products = await productService.getInventory();
  console.log("PRODUCTS", products);

  return Response.json({ products });
}
