import fs from "fs/promises";
import Link from "next/link";
import path from "path";
export default function Home({ products }) {
  return (
    <div>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <Link href={`/products/${product.id}`}>{product.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// "build": "next build", // start之前需要build
// "start": "next start",// 将项目模拟运行在生产环境

// 预渲染---先执行这个函数在执行上面的函数  以上获取数据的过程均发生在服务端
export async function getStaticProps() {
  console.log(" re generating。。。");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      // 重定向
      redirect: {
        destination: "/no-data",
      },
    };
  }

  if (data.products.length === 0) {
    return {
      notFound: true, // 预渲染默认展示404页面
    };
  }
  return {
    props: {
      products: data.products,
    },
    revalidate: 6, //项目页面重新渲染间隔,在时间间隔内重新刷新页面也不会重新调用getStaticProps
  };
}
