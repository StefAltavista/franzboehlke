import Image from "next/image";
import styles from "./page.module.css";
import ItemsList from "@/components/ItemsList";
import db from "@/db/db.json";

export default function Home() {
    return (
        <div id="home">
            <div id="header">
                <Image
                    alt="Franz Boehlke Logo"
                    src="/images/logo.png"
                    width={100}
                    height={100}
                />
            </div>
            <ItemsList items={db} />
        </div>
    );
}
