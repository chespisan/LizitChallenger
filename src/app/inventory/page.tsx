import { InventoryContainer } from "app/presentation";

export default async function InventoryPage() {
  const api = process.env.API_LOCAL;
  const response = await fetch(`${api}/api`);
  const { products } = await response.json();
  return <InventoryContainer products={products} />;
}
