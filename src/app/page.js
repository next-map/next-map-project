import Image from "next/image";
import styles from "./page.module.css";
import MapPage from "./map/map";

export default function Home() {
  return (
    <div>
      <MapPage/>
    </div>
  );
}
