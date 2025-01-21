export type IconProps<T> = {
  className?: string;
  color?: string;
  size?: "default" | "short";
  variant?: "up" | "right" | "down" | "left";
  onClick?: () => void;
} & T;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type Icon<T = {}> = React.FC<IconProps<T>>;
