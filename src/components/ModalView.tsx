"use client";

import Image from "next/image";
import { useState } from "react";
import "./modalView.css";
import { itemInterface } from "./ItemsList";

import Loading from "./Loading";

export default function ModalView({
    file,
    closeModal,
}: {
    file: itemInterface;
    closeModal: Function;
}) {
    const [load, setLoad] = useState("loading");
    const loaded = () => {
        setLoad("loaded");
    };

    const close = () => {
        closeModal();
    };
    return (
        <div id="modalBackground" onClick={close}>
            <div id="viewModal" onClick={close}>
                {load == "loading" && <Loading />}
                <p>Title</p>
                <Image
                    alt="Franz Boehlke item"
                    src={file.url}
                    className={`modalImg ${load}`}
                    onLoad={loaded}
                    onClick={close}
                    width={400}
                    height={400}
                />

                <p>
                    Description: bla bla dfiuhasdf arg asg asdf asdf asdf
                    fdhohasdf n{" "}
                </p>
            </div>
        </div>
    );
}
