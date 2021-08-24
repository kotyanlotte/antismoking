import { useEffect, VFC } from "react";
import { useLocation } from "react-router-dom";

import { LocationType } from "@/components/types";

export const ScrollToTop: VFC = () => {
    const pathname = useLocation<LocationType>();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};
