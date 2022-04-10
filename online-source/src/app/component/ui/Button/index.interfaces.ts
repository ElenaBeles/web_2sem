import { ReactNode } from "react";

export interface IButton {
    text?: any;
    type?: "button" | "submit" | "reset"
    onClick?: (e : any) => void;
    isActive?: boolean;
    isDisabled?: boolean;
    className?: string;
    status?: string;
    padding?: string;
    children?: ReactNode
}