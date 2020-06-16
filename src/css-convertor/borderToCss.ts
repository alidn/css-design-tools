import {AllSidesBorderProps, BorderProps, BorderRadiusProps, SideBorderProps} from "../interfaces/border";

export function borderRadiusPropsToCss(props: BorderRadiusProps): string {
    return props.TopLeft + "px " + props.TopRight + "px "
        + props.BottomRight + "px " + props.BottomLeft + "px;";
}

export function sideBorderPropsToCss(props: SideBorderProps): string {
    return props.type + " " + props.width + "px " + props.color + ";";
}

export function allSidesBorderPropsToCss(props: AllSidesBorderProps): string {
    return "border-top: " + sideBorderPropsToCss(props.top) + ";\n" +
        "border-bottom: " + sideBorderPropsToCss(props.bottom) + ";\n" +
        "border-left: " + sideBorderPropsToCss(props.left) + ";\n" +
        "border-right: " + sideBorderPropsToCss(props.right) + ";\n";
}

export function borderPropsToCss(props: BorderProps) {
    let cssRules: string = borderRadiusPropsToCss(props.borderRadiusProps)
        + allSidesBorderPropsToCss(props.allSidesProps);
}