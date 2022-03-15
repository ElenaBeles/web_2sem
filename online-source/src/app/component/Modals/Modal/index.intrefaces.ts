import {ReactNode} from "react";

export interface Props {
    title: ReactNode;
    onClose: () => void;
}