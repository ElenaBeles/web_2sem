export interface ICheckboxGroup {
    className?: string;
    multiple?: boolean;
    onChange?: (values: Array<unknown>) => void;
    showSelectAll?: boolean
}