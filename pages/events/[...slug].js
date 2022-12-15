import { useRouter } from "next/router";
import React from "react";
import EventDetailItem from "../../components/event-detail/EventDetailItem";
import { getFilteredEvents } from "../../dummy-data";

function FilteredEventsPage() {
  const {
    query: { slug },
  } = useRouter();

  // console.log("FilteredEventsPage", slug);
  if (!slug) {
    return <p className="center">loading。。。。。。</p>;
  }
  const [year, month] = slug;
  if (
    isNaN(year) ||
    isNaN(month) ||
    month < 0 ||
    month > 11 ||
    year > 2023 ||
    year < 1850
  ) {
    return <p className="center">Invalid filter. Please adjust your values!</p>;
  }
  const filteredEvents = getFilteredEvents({ year, month });
  console.log(filteredEvents);
  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No events found for the chosen filter!</p>;
  }

  return (
    <div>
      <h1>
        FilteredEventsPage,这是一个以/xx/aa 。。。的方式传递多个参数的路由,
      </h1>
      {filteredEvents.map((val) => {
        return <EventDetailItem key={val.id} {...val} />;
      })}
    </div>
  );
}

export default FilteredEventsPage;
