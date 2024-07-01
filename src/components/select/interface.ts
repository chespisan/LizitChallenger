export interface IOptionsSelect {
  label: string;
  value: string;
}

export interface ISelectComponent {
  label?: string;
  options: IOptionsSelect[];
  onChange?: (event: React.FormEvent<HTMLSelectElement>) => void;
  name: string;
  value: string;
  disabled?: boolean;
}
