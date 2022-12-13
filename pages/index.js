import Link from "next/link";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";
import styles from "../styles/Home.module.css";
export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div className={styles.container}>
      <EventList items={featuredEvents}></EventList>
    </div>
  );
}
