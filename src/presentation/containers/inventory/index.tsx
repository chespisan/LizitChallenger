import { InventoryView } from "app/presentation/views";

const headerTexts = [
  "Foto",
  "Nombre",
  "Categoría",
  "Descripción",
  "Tarifa base",
  "",
];

export const InventoryContainer = async () => {
  const api = process.env.API_LOCAL;

  const response = await fetch(`${api}/api`);
  const { products } = await response.json();

  return <InventoryView products={products} headerTexts={headerTexts} />;
};
