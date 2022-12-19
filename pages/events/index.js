import Head from "next/head";
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
      <Head>
        {/* 修改tab页面头部标题信息 */}
        <title>sikara Events</title>
        {/* 当你的页面出现在搜索引擎结果中时，content显示搜索结果中的文本 */}
        <meta name="description" content="sikara" />
      </Head>
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
