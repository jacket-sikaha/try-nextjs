import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import EventDetailItem from "../../components/event-detail/EventDetailItem";
import { getFilteredEvents } from "../../helpers/api-util";
import Button from "../../components/ui/button";
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());

function FilteredEventsPage({ hasError, events, date }) {
  // 客户端请求渲染
  // const {
  //   query: { slug },
  // } = useRouter();

  // const [year, month] = slug;
  // const [loadedEvents, setLoadedEvents] = useState();
  // const { data, error } = useSWR(
  //   "https://nextjs-course-8689e-default-rtdb.firebaseio.com/events.json",
  //   fetcher
  // );

  // useEffect(() => {
  //   if (data) {
  //     const tmp = [];
  //     for (const key in data) {
  //       if (Object.hasOwnProperty.call(data, key)) {
  //         const element = data[key];
  //         tmp.push(element);
  //       }
  //     }
  //     setLoadedEvents(tmp);
  //   }
  // }, [data]);

  // if (!loadedEvents) {
  //   return <p style={{ textAlign: "center" }}>loading。。。。。。</p>;
  // }

  // if (
  //   isNaN(year) ||
  //   isNaN(month) ||
  //   month < 0 ||
  //   month > 11 ||
  //   year > 2023 ||
  //   year < 1850 ||
  //   error
  // ) {
  //   return (
  //     <p style={{ textAlign: "center" }}>
  //       Invalid filter. Please adjust your values!
  //     </p>
  //   );
  // }
  // // const filteredEvents = events;
  // const filteredEvents = loadedEvents.filter((event) => {
  //   const eventDate = new Date(event.date);
  //   return eventDate.getFullYear() == year && eventDate.getMonth() == month;
  // });

  // if (!filteredEvents || filteredEvents.length === 0) {
  //   return (
  //     <div
  //       style={{
  //         display: "flex",
  //         flexDirection: "column",
  //         alignItems: "center",
  //       }}
  //     >
  //       <p>No events found for the chosen filter!</p>
  //       <Button link={"/events"}>show all events</Button>
  //     </div>
  //   );
  // }
  // return (
  //   <div
  //     style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
  //   >
  //     <h1>
  //       FilteredEventsPage,这是一个以/xx/aa 。。。的方式传递多个参数的路由,
  //     </h1>
  //     <h2 style={{ textAlign: "center" }}>
  //       Events in {new Date(year, month).toDateString().split(" ", 2).slice(-1)}{" "}
  //       {year}
  //     </h2>
  //     {filteredEvents.map((val) => {
  //       return <EventDetailItem key={val.id} {...val} />;
  //     })}
  //     <Button link={"/events"}>show all events</Button>
  //   </div>
  // );

  // 服务端预渲染 与客户端请求渲染 两者二选一
  if (hasError) {
    return (
      <p style={{ textAlign: "center" }}>
        Invalid filter. Please adjust your values!
      </p>
    );
  }
  const filteredEvents = events;
  const { year, month } = date ?? {};

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p>No events found for the chosen filter!</p>
        <Button link={"/events"}>show all events</Button>
      </div>
    );
  }
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>
        FilteredEventsPage,这是一个以/xx/aa 。。。的方式传递多个参数的路由,
      </h1>
      <h2 style={{ textAlign: "center" }}>
        Events in {new Date(year, month).toDateString().split(" ", 2).slice(-1)}{" "}
        {year}
      </h2>
      {filteredEvents.map((val) => {
        return <EventDetailItem key={val.id} {...val} />;
      })}
      <Button link={"/events"}>show all events</Button>
    </div>
  );
}

export default FilteredEventsPage;
// 多个路由参数下采用服务端预渲染较好
// 区别静态预渲染 对于多个动态路由情况就不需要额外配置 且也不会提前生成预渲染页面因为不知道具体的参数是多少
export async function getServerSideProps(context) {
  const { params } = context;
  const [year, month] = params.slug;

  if (
    isNaN(year) ||
    isNaN(month) ||
    month < 0 ||
    month > 11 ||
    year > 2023 ||
    year < 1850
  ) {
    return {
      // 对于数据获取出错有2种解决方法
      props: {
        hasError: true,
      },
      // notFound: true,
      // redirect: {
      //   destination: "/error",
      // },
    };
  }
  const filteredEvents = await getFilteredEvents({ year, month });

  return {
    props: {
      events: filteredEvents,
      date: {
        year,
        month,
      },
    },
  };
}
