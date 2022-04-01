import {ICheckboxGroup} from "./index.interfaces";
import {Children, cloneElement, FC, useEffect, useState} from "react";

export const CheckboxGroup: FC<ICheckboxGroup> = ({children, multiple = "true", onChange, isShowSelectAll = false}) => {
    const [checked, setChecked] = useState<Array<string>>([]);

    useEffect(() =>{
        console.log(children)
        }, []);


    const onCheckboxChange = (values: string) => {
        setChecked([...checked, values]);
    }

    const newChildren = Children.map(children, (child: any) =>
        cloneElement(child, {
            key: child.props.value,
            onChange: (v) => {
              console.log(v);
            }
        }),
    )
    return(
        <>
            { newChildren }
        </>
    )
}