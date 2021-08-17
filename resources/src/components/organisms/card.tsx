import React, { VFC } from "react";

export const Card: VFC = () => {
    return (
        <div className="flex flex-col bg-yellow-light">
            <h2 className="text-3xl font-bold my-8 text-center">できること</h2>
            <div className="md:flex md:flex-row space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                <div className="card flex flex-col items-center space-y-2">
                    <h3 className="text-xl font-bold text-center">
                        グラフで可視化
                    </h3>
                    <picture>
                        <source
                            srcSet="/images/cardImages/undraw_Charts.webp"
                            type="image/webp"
                        />
                        <img
                            src="/images/cardImages/undraw_Charts.png"
                            alt="グラフ画像"
                        />
                    </picture>
                    <div>
                        <div className="font-semibold">自分の健康値が</div>
                        <div className="font-semibold">グラフで見れます</div>
                    </div>
                </div>
                <div className="card flex flex-col items-center space-y-2">
                    <h3 className="text-xl font-bold">パラメータで表示</h3>
                    <picture>
                        <source srcSet="/images/cardImages/undraw_Calculator.webp" />
                        <img
                            src="/images/cardImages/undraw_Calculator.png"
                            alt="計算機画像"
                        />
                    </picture>
                    <div>
                        <div className="font-semibold">
                            吸ったタバコの本数や
                        </div>
                        <div className="font-semibold">減った寿命など</div>
                        <div className="font-semibold">パラメータとして</div>
                        <div className="font-semibold">見れます</div>
                    </div>
                </div>
                <div className="card flex flex-col items-center space-y-2">
                    <h3 className="text-xl font-bold">タバコの知識を享受</h3>
                    <picture>
                        <source srcSet="/images/cardImages/undraw_Studying.webp" />
                        <img
                            src="/images/cardImages/undraw_Studying.png"
                            alt="勉強画像"
                        />
                    </picture>
                    <div>
                        <div className="font-semibold">
                            タバコの本数に応じて
                        </div>
                        <div className="font-semibold">
                            タバコの知識が得れます
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
