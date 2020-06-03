import { ShadowProps } from "../interfaces/interfaces";

export function cssFromShadowProps(props: ShadowProps): string {
  return props.inset
    ? "inset "
    : "" +
        props.horizontalOffset +
        "px " +
        props.verticalOffset +
        "px " +
        props.blurRadius +
        "px " +
        props.spreadRadius +
        "px " +
        "black";
}
