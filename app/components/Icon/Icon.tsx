interface IconProps {
  id: string;
  width?: number;
  height?: number;
  className?: string;
}

export const Icon = ({ id, width = 16, height = 16, className = '' }: IconProps) => {
  return (
    <svg width={width} height={height} className={`${className}`} aria-hidden="true">
      <use href={`/sprite.svg#icon-${id}`} />
    </svg>
  );
};
