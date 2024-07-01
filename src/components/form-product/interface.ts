export interface IFormInput {
  name: string;
  category: string;
  description: string;
  baseRate: string;
}

export interface IFormProduct {
  action: (data: any) => void;
}
