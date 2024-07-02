export interface ITextareaComponent {
  disabled?: boolean;
  label?: string;
  onChange: (event: React.FormEvent<HTMLTextAreaElement>) => void;
  name: string;
  value: string;
}
