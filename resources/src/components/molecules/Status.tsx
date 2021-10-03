import React, { memo, VFC } from "react";

import { ChartsType } from "@/components/types/chartsType";

type StatusType = {
    userData: {
        data: ChartsType[];
        user: {
            name: string | undefined;
            cigarettes: number | undefined;
        };
    };
};

export const Status: VFC<StatusType> = memo(({ userData }) => {
    return (
        <div className="font-doraque">
            <table className="bg-black-strong border-white-default text-white-default w-full">
                <thead>
                    <tr>
                        <th>{`${userData.user.name}さんのパラメータ`}</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.data.map((val) => (
                        <tr key={val.title}>
                            <td>{`${val.title}:${val.value}`}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td>デメリット</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
});

Status.displayName = "Status";
