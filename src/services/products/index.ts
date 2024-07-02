import { InventoryRepostory } from "app/domain";

export class ProductService implements InventoryRepostory {
  async getInventory() {
    try {
      const response = await fetch(`${process.env.FAKE_STORE_API}/products`);
      const data = await response.json();
      return data;
    } catch (error) {}
  }
}
