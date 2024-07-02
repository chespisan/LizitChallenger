import { InventoryEntity } from "app/domain/entities";

export interface InventoryRepostory {
  getInventory(): Promise<InventoryEntity[]>;
}
