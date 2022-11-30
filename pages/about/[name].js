import { useRouter } from "next/router";

function Ainame() {
  const { pathname, query } = useRouter();
  console.log(pathname, query);
  // query的值可以用于给后端发送请求
  return (
    <div>
      这是一个只有一层的动态路由，访问url是 http://localhost:3000/about/xxxx
      （除了index，固定的路由都能访问）
    </div>
  );
}

export default Ainame;
