export interface RatingEntity {
  rate: number;
  count: number;
}

export interface ProductEntity {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: RatingEntity;
  images?: string[];
}

export interface InventoryEntity {
  products: ProductEntity[];
}
