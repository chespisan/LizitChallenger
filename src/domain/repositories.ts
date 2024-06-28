import { InventoryEntity } from "./";

export interface InventoryRepostory {
  getInventory(): Promise<InventoryEntity[]>;
}
