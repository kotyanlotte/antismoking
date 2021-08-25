import React, { VFC } from "react";

import { PrivacyList } from "@/components/atoms/PrivacyList";
import { privacy } from "@/components/utils/privacy";

export const PrivacyLists: VFC = () => {
    return (
        <div className="bg-gray-light py-12">
            <div className="w-4/5 bg-white-default py-12 px-vw10 mx-auto">
                <div className="mb-5">
                    <h1 className="font-bold text-2xl flex justify-center mb-8">
                        プライバシーポリシー
                    </h1>
                    <p>
                        当サービス提供者（以下，「提供者」といいます。）は，本ウェブサイト上で提供するサービス（以下,「本サービス」といいます。）における，ユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）を定めます。。
                    </p>
                </div>
                <PrivacyList description={privacy.first} />
                <PrivacyList description={privacy.second} />
                <PrivacyList description={privacy.third} />
                <PrivacyList description={privacy.forth} />
                <PrivacyList description={privacy.fifth} />
                <PrivacyList description={privacy.sixth} />
                <PrivacyList description={privacy.seventh} />
                <PrivacyList description={privacy.eighth} />
                <PrivacyList description={privacy.ninth} />
                <p className="text-center">以上</p>
            </div>
        </div>
    );
};
