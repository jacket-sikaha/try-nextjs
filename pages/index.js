import Head from "next/head"; // 修改部分原head标签里的信息
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";
// 初始主页面
export default function Home(props) {
  // 对于获取渲染数据来渲染页面两种方式:
  // 1  react 的 useEffect方法请求api，后端来将数据返回给前端渲染
  // 2  nextjs的预渲染
  // （但是对于现在这种情况没有相应api，
  // 组件内部也没有权限来访问文件内容来获取数据）
  // error - ./lib/posts-util.js
  // Module not found: Can't resolve 'fs'
  // console.log(getFeaturedPosts()); // 调用失败
  return (
    <>
      <Hero />
      <FeaturedPosts posts={props.posts} />
      <button onClick={name}>www</button>
    </>
  );
}
function name() {
  fetch("/api/hello")
    .then((res) => res.json())
    .then((res) => console.log(res));
}
export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
    // 该revalidate属性是以秒为单位的量，之后可以重新生成页面（默认为false或不重新验证）
    revalidate: 8,
  };
}
