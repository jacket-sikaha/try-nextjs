import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import { getAllEvents } from "../../helpers/api-util";

function AllEventPages({ events }) {
  const router = useRouter();
  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}/abc`;
    router.push(fullPath);
  }
  return (
    <div>
      <EventSearch events={events} onSearch={findEventsHandler} />
      <EventList items={events}></EventList>
    </div>
  );
}

export default AllEventPages;

export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      events,
    },
    revalidate: 60, // 每60s有新的请求进来重新生成该页面
  };
}
