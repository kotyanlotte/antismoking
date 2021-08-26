import React, { VFC } from "react";

import { PolicyList } from "@/components/atoms/PolicyList";
import { policy } from "@/components/utils/policy";

export const PolicyLists: VFC = () => {
    return (
        <div className="bg-gray-light py-12">
            <div className="w-4/5 bg-white-default py-12 px-vw10 mx-auto">
                <div className="mb-5">
                    <h1 className="font-bold text-2xl flex justify-center mb-8">
                        プライバシーポリシー
                    </h1>
                    <p>
                        当サービス提供者（以下，「提供者」といいます。）は，本ウェブサイト上で提供するサービス（以下,「本サービス」といいます。）における，ユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）を定めます。
                    </p>
                </div>
                <PolicyList description={policy.first} />
                <PolicyList description={policy.second} />
                <PolicyList description={policy.third} />
                <PolicyList description={policy.forth} />
                <PolicyList description={policy.fifth} />
                <PolicyList description={policy.sixth} />
                <PolicyList description={policy.seventh} />
                <PolicyList description={policy.eighth} />
                <PolicyList description={policy.ninth} />
                <p className="text-center">以上</p>
            </div>
        </div>
    );
};
