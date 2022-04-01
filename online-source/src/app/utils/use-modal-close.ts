import { useEffect } from "react";

export const useModalClose = (ref: any, handler: Function) => {
    useEffect(() => {
        const reference = ref.current;

        const listener = (event: any) => {
            if(reference === event.target) handler();
        };

        reference?.addEventListener('mousedown', listener);

        return () => reference?.removeEventListener('mousedown', listener);
    }, [ref, handler]);
}