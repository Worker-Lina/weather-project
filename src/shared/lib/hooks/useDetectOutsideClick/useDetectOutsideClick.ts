import { useState, useEffect } from "react";

export const useDetectOutsideClick = (ref: React.RefObject<HTMLDivElement>, open: boolean) => {
    const [isActive, setIsActive] = useState(open);

    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            if (ref.current !== null && !ref.current.contains(e.target as Node)) {
                setIsActive(false);
            }
        };

        if (isActive) {
            window.addEventListener("click", onClick);
        }

        return () => {
            window.removeEventListener("click", onClick);
        };
    }, [isActive, ref]);

    return [isActive, setIsActive] as const;
};
