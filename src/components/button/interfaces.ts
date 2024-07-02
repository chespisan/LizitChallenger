export type TButtonVariant = "default" | "icon" | "only-icon";
export type TButtonColor = "primary" | "secondary" | "danger" | "outline";
export type TButtonSize = "x-small" | "small" | "medium" | "large" | "x-large";

export interface IButtonComponent {
  action: (event: React.MouseEvent<HTMLElement>) => void;
  color?: TButtonColor;
  disabled?: boolean;
  iconPath?: string;
  size?: TButtonSize;
  text?: string;
  variant?: TButtonVariant;
}
