import React, { VFC } from "react";

export const NoMatch: VFC = () => {
    return (
        <div>
            <picture>
                <source
                    srcSet="images/404page/undraw_page_not_found.webp"
                    type="image/webp"
                />
                <img
                    className=""
                    src="/images/404page/undraw_page_not_found.jpg"
                    alt="page not found"
                />
            </picture>
        </div>
    );
};
