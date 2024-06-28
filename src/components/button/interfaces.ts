export type TButtonVariant = "default" | "icon" | "only-icon";
export type TButtonColor = "primary" | "secondary";
export type TButtonSize = "small" | "medium" | "large";

export interface IButtonComponent {
  action: (event: React.MouseEvent<HTMLElement>) => void;
  color?: TButtonColor;
  iconPath?: string;
  size?: TButtonSize;
  text?: string;
  variant?: TButtonVariant;
}
