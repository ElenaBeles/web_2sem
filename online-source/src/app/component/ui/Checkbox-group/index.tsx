import {ICheckboxGroup} from "./index.interfaces";
import {Children, cloneElement, FC, useEffect, useState} from "react";
import {Checkbox} from "../Checkbox";

export const CheckboxGroup: FC<ICheckboxGroup> = ({children, multiple = "true", onChange, showSelectAll = false}) => {
    const [isShowSelectAll, setIsShowSelectAll] = useState(showSelectAll);

    useEffect(() => {
        console.log(children)
    }, []);

    const newChildren = Children.map(children, (child: any) =>
        cloneElement(child, {
            key: child.props.value,
            onChange: (v) => {
                setIsShowSelectAll(!isShowSelectAll)
                console.log(v);
            }
        }),
    )
    return (
        <>
            <Checkbox
                isChecked={isShowSelectAll}
                text={"Выбрать всё"}
            />
            {newChildren}
        </>
    )
}