export interface ShadowProps {
  horizontalOffset: number;
  verticalOffset: number;
  blurRadius: number;
  spreadRadius: number;
  inset: boolean;
}

export const defaultShadowProps: ShadowProps = {
  horizontalOffset: 0,
  verticalOffset: 48,
  blurRadius: 150,
  spreadRadius: -30,
  inset: false,
};

export interface BorderProps {}

export interface SizeProps {
  width: number;
  height: number;
}
