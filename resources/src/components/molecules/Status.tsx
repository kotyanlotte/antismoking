import React, { memo, VFC } from "react";

import { ChartsType } from "@/components/types/chartsType";

type UserData = Pick<ChartsType, "title"> & {
    value: number | string | undefined;
};

type StatusType = {
    userData: UserData[];
    userName: string | undefined;
};

export const Status: VFC<StatusType> = memo(({ userData, userName }) => {
    return (
        <div className="font-doraque">
            <table className="bg-black-strong border-white-default text-white-default w-full">
                <thead>
                    <tr>
                        <th>{`${userName}さんのパラメータ`}</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((val) => (
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
