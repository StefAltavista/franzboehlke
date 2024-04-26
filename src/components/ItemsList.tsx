"use client";
export interface itemInterface {
    id: number;
    title: string;
    url: string;
    description: string;
}
import Image from "next/image";
import { useRef, useState, createRef, useEffect } from "react";
import ModalView from "./ModalView";
import { isMobile } from "react-device-detect";
import "./itemsList.css";

export default function ItemsList({ items }: { items: itemInterface[] }) {
    const [itemsArray, setItemsArray] = useState(items);
    const [toggleModal, setToggleModal] = useState(false);
    const [selected, setSelected] = useState<itemInterface | null>(null);
    const [inView, setInview] = useState(0);
    let itemsListRef = useRef<HTMLDivElement>(null);
    let itemsRef = useRef<HTMLDivElement[]>([]);
    let count = 1;

    const handleClick = (item: itemInterface) => {
        setToggleModal(true);
        setSelected(item);
    };

    const handleScroll = () => {
        if (itemsListRef.current) {
            let deltaH =
                (itemsListRef.current?.scrollHeight * count) /
                itemsArray.length;

            setInview(
                Math.round(itemsListRef.current.scrollTop / deltaH) * deltaH
            );
            if (
                itemsListRef.current.scrollTop / deltaH >=
                itemsArray.length - 2
            ) {
                setItemsArray([...itemsArray, ...items]);
            }
        }
    };

    useEffect(() => {
        itemsListRef.current?.scrollTo({
            top: inView,
            behavior: "smooth",
        });
    }, [inView]);

    return (
        <div id="itemsList" onWheel={handleScroll} ref={itemsListRef}>
            {itemsArray.map((x, idx) => (
                <div
                    className={`item ${idx}`}
                    key={idx}
                    onClick={() => handleClick(x)}
                >
                    <Image
                        alt="franz boehlke item"
                        src={x.url}
                        width={200}
                        height={200}
                        ref={(el) => {
                            if (el) {
                                itemsRef.current[idx] = el;
                            }
                        }}
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
