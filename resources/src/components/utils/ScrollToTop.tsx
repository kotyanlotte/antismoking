import { useEffect, VFC } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop: VFC = () => {
    const pathname = useLocation<Location>();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};
