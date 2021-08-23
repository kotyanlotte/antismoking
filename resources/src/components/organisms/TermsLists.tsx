import React, { VFC } from "react";

import { TermsList } from "@/components/atoms/TermsList";
import { term } from "@/components/utils/term";

export const TermsLists: VFC = () => {
    return (
        <div className="bg-gray-light py-12">
            <div className="w-4/5 bg-white-default py-12 px-vw10 mx-auto">
                <div className="mb-5">
                    <h1 className="font-bold text-2xl text-center mb-8">
                        利用規約
                    </h1>
                    <p>
                        この利用規約（以下，「本規約」といいます。）は，当サービス提供者（以下，「提供者」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。
                    </p>
                </div>
                <TermsList description={term.first} />
                <TermsList description={term.second} />
                <TermsList description={term.third} />
                <TermsList description={term.forth} />
                <TermsList description={term.fifth} />
                <TermsList description={term.sixth} />
                <TermsList description={term.seventh} />
                <TermsList description={term.eighth} />
                <TermsList description={term.ninth} />
                <TermsList description={term.tenth} />
                <TermsList description={term.eleventh} />
                <TermsList description={term.twelfth} />
                <TermsList description={term.thirteenth} />
                <TermsList description={term.fourteenth} />
                <TermsList description={term.fifteenth} />
                <p className="text-center">以上</p>
            </div>
        </div>
    );
};
