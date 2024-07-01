export type TInputVariants = "start" | "end";
export type TInputIconSize = "sm" | "md";

export interface IInputComponent {
  iconPath?: string;
  label?: string;
  variant?: TInputVariants;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  sizeIcon?: TInputIconSize;
  name?: any;
  disabled?: boolean;
}
