import {useEffect, useState} from "react";
import {createPortal} from "react-dom";
import {IPortal} from "./index.interfaces";

export const Portal = (props: IPortal) => {
    const {className = 'portal-root', el = 'div', children, role} = props
    const [container] = useState(document.createElement(el));

    container.classList.add(className);
    if(role) container.setAttribute('role', role);
    useEffect(() => {
        document.body.appendChild(container);
        return () => {
            document.body.removeChild(container);
        }
    }, []);
    return createPortal(children, container);
};