import React, { VFC } from "react";
import { Link } from "react-router-dom";

import { PrimaryButton } from "@/components/atoms/buttons/primaryButton";

export const Header: VFC = () => {
    return (
        <header className="h-20 w-11/12 mx-auto flex flex-col items-center pt-2 surface:flex-row surface:items-center surface:pt-0 surface:justify-between">
            <Link to="about">
                <span className="text-4xl md:text-5xl">Anti</span>
                <span className="text-4xl text-green-default md:text-5xl">
                    Smoking
                </span>
            </Link>
            <nav>
                <ul className="flex space-x-3 mt-2">
                    <Link to="/signin">
                        <PrimaryButton
                            style={
                                "bg-green-default border-green-default text-white-default hover:bg-green-dark hover:border-green-dark"
                            }
                        >
                            新規登録
                        </PrimaryButton>
                    </Link>
                    <Link to="/signup">
                        <PrimaryButton
                            style={
                                "text-green-default border-green-default hover:bg-green-default hover:text-white-default"
                            }
                        >
                            ログイン
                        </PrimaryButton>
                    </Link>
                </ul>
            </nav>
        </header>
    );
};
