import Image from "next/image";
import Link from "next/link";
import ItemsList from "@/components/ItemsList";
import db from "@/db/db.json";
import "./home.css";

export default function Home() {
    console.log("javascript working?");
    return (
        <div id="home">
            <div id="header">
                <Link href={"./contact"}>
                    <Image
                        id="logo"
                        alt="Franz Boehlke Logo"
                        src="/images/logo.png"
                        width={100}
                        height={100}
                    />
                </Link>
            </div>
            <div id="body">
                <ItemsList items={db} />
            </div>
        </div>
    );
}
