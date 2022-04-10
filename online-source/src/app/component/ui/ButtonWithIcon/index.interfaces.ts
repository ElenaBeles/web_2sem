export interface IButtonWithIcon {
    name: string;
    type?: "button" | "submit" | "reset"
    text?: any;
    onClick?: (e : any) => void;
}