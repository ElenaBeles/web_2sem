export interface IButton {
    text: any;
    type: "button" | "submit" | "reset" | undefined
    onClick?: (e : any) => void;
    isActive?: boolean;
    isDisabled?: boolean;
    className?: string;
    status?: string;
    padding?: string
}