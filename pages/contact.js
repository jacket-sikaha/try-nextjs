import Head from "next/head"; // 修改部分原head标签里的信息
import { getFeaturedEvents } from "../helpers/api-util";
// 初始主页面
export default function ContactPage({ featuredEvents }) {
  return (
    <div>
      {/* 可以添加在jsx里任何位置 */}
      <Head>
        {/* 修改tab页面头部标题信息 */}
        <title>sikara Events</title>
        {/* 当你的页面出现在搜索引擎结果中时，content显示搜索结果中的文本 */}
        <meta name="description" content="sikara" />
      </Head>
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