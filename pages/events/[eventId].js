import { useRouter } from "next/router";
import { Fragment } from "react";
import { getEventById } from "../../dummy-data";
import EventDetailItem from "../../components/event-detail/EventDetailItem";
function EventDetailPages() {
  const {
    query: { eventId },
  } = useRouter();
  const event = getEventById(eventId);
  if (!event) {
    return <p>No event found!</p>;
  }
  return (
    <Fragment>
      <h1>EventDetailPages,这个路由只匹配/events后一个参数的路由</h1>
      <EventDetailItem {...event} />
    </Fragment>
  );
}

export default EventDetailPages;
