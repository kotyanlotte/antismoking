import React, { VFC } from "react";
import { Link } from "react-router-dom";

export const Footer: VFC = () => {
    return (
        <footer className="bg-green-default text-center">
            <div className="flex flex-col justify-center h-20 surface:flex-row surface:items-center surface:justify-around xl:justify-between xl:mx-8">
                <div>
                    <small>&copy; 2021 Ko_chan</small>
                </div>
                <nav>
                    <ul className="space-x-4">
                        <Link to="/terms">利用規約</Link>
                        <Link to="/privacy">プライバシーポリシー</Link>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};
