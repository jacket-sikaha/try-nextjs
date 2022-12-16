import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import { getAllEvents } from "../../dummy-data";

function AllEventPages() {
  const events = getAllEvents();
  const router = useRouter();
  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}/abc`;
    router.push(fullPath);
  }
  console.log(JSON.stringify(events));
  return (
    <div>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events}></EventList>
    </div>
  );
}

export default AllEventPages;
