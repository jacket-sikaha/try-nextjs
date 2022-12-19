import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";
import EventDetailItem from "../../components/event-detail/EventDetailItem";
import { getFeaturedEvents } from "../../dummy-data";
import { getAllEvents, getEventById } from "../../helpers/api-util";
function EventDetailPages({ event }) {
  console.log(event);
  if (!event) {
    return <p>No event found!</p>;
  }
  return (
    <Fragment>
      <Head>
        {/* 修改tab页面头部标题信息 */}
        <title>{event.title}</title>
        {/* 当你的页面出现在搜索引擎结果中时，content显示搜索结果中的文本 */}
        <meta name="description" content={event.description} />
      </Head>
      <h1>EventDetailPages,这个路由只匹配/events后一个参数的路由</h1>
      <EventDetailItem {...event} />
    </Fragment>
  );
}

export default EventDetailPages;

export async function getStaticProps(context) {
  const eventId = context.params.eventId; // eventId 动态路由标识
  console.log(context);
  const event = await getEventById(eventId);
  return {
    props: {
      event,
    },
    revalidate: 30,
  };
}

// 静态预渲染---动态路由配置
export async function getStaticPaths() {
  // const data = await getAllEvents(); // 优化：不需要预渲染全部路径，避免浪费资源---可以有针对性的渲染经常访问的path，但fallback得是true
  const data = await getFeaturedEvents();
  const paths = data.map((val) => ({ params: { eventId: val.id } }));
  return {
    paths,
    fallback: true, //加载paths配置的实例页面，类似路由懒加载
    // fallback: false, //默认加载所有的动态页面，需要paths配置所有的实例页面
    // fallback: "blocking",// 方法2:对于预渲染请求还未完成时的后备操作-- - 此方法在请求完成之前会陷入空白阻塞状态,
  };
}
