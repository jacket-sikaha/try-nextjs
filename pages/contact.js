import Head from "next/head"; // 修改部分原head标签里的信息
// 初始主页面
export default function ContactPage({ featuredEvents }) {
  return <div></div>;
}

// export async function getStaticProps() {
//   const featuredEvents = await getFeaturedEvents();
//   return {
//     props: {
//       featuredEvents,
//     },
//     revalidate: 1800, // 每半小时重新生成该页面
//   };
// }
