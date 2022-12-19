import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-util";
export default function Home({ featuredEvents }) {
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      featuredEvents,
    },
    revalidate: 1800, // 每半小时重新生成该页面
  };
}
