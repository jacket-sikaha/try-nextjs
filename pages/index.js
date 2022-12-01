import Link from "next/link";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <h1>sikara</h1>
      <ul>
        <li>
          <Link href="/portfolio">portfolio</Link>
        </li>
        <li>
          <Link replace href="/clients">
            clients
          </Link>
        </li>
      </ul>
    </div>
  );
}
