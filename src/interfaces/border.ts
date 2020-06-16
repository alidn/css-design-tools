export interface BorderRadiusProps {
    TopLeft: number,
    TopRight: number,
    BottomLeft: number,
    BottomRight: number
}

export enum BorderType {
    Dotted= "dotted",
    Dashed= "dashed",
    Solid= "solid",
    Double = "double",
    None = "none"
}

export interface SideBorderProps {
    type: BorderType,
    width: number,
    color: string
}

export interface AllSidesBorderProps {
    left: SideBorderProps,
    right: SideBorderProps,
    top: SideBorderProps,
    bottom: SideBorderProps
}

export interface BorderProps {
    borderRadiusProps: BorderRadiusProps,
    allSidesProps: AllSidesBorderProps
}

export interface SizeProps {
    width: number;
    height: number;
}
