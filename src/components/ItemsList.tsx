"use client";
export interface itemInterface {
    id: number;
    title: string;
    url: string;
    description: string;
}
import Image from "next/image";
import { useState } from "react";
import ModalView from "./ModalView";
import { isMobile } from "react-device-detect";
import "./itemsList.css";

export default function ItemsList({ items }: { items: itemInterface[] }) {
    const [toggleModal, setToggleModal] = useState(false);
    const [selected, setSelected] = useState<itemInterface | null>(null);

    const handleClick = (item: itemInterface) => {
        setToggleModal(true);
        setSelected(item);
    };

    return (
        <div id="itemsList">
            {items.map((x) => (
                <div
                    className="item"
                    key={x.title}
                    onClick={() => handleClick(x)}
                >
                    <Image
                        alt="franz boehlke item"
                        src={x.url}
                        width={200}
                        height={200}
                    />
                </div>
            ))}
            {toggleModal && selected && (
                <ModalView
                    file={selected}
                    closeModal={() => setToggleModal(false)}
                />
            )}
        </div>
    );
}
