import React from "react";
import fs from "fs/promises";
import path from "path";
function ProductDetailPage({ loadedProduct }) {
  // 方法1:对于预渲染请求还未完成时的后备操作
  if (!loadedProduct) {
    return <p>loading......</p>;
  }

  return (
    <>
      <div>ProductDetailPage</div>
      <h1>{loadedProduct.title}</h1>
      <div>{loadedProduct.description}</div>
    </>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

// 对于动态页面相对于初始index js则需要额外的配置
// 再调用getStaticProps 3次
export async function getStaticProps(context) {
  const { params } = context;
  const pjId = params.pid;
  const data = await getData();
  const product = data.products.find((val) => {
    return val.id === pjId;
  });

  // 访问不存在的动态路由时的展示效果(先loading展示，getStaticProps找不到数据就返回404)---或者直接调整fallback: false效果也同理
  if (!product) {
    return {
      notFound: true, // 预渲染默认展示404页面
    };
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
}

// 先调用getStaticPaths 3次 预先告诉next js要渲染几个具体动态页面
// 从start模拟可知 如果页面很多，预渲染将发送很多请求浪费资源
export async function getStaticPaths() {
  const data = await getData();
  const ids = data.products.map((product) => product.id);
  const pathsWithParams = ids.map((id) => ({ params: { pid: id } }));
  return {
    paths: pathsWithParams,
    fallback: true, //加载paths配置的实例页面，类似路由懒加载
    // fallback: false, //默认加载所有的动态页面，需要paths配置所有的实例页面
    // fallback: "blocking",// 方法2:对于预渲染请求还未完成时的后备操作-- - 此方法在请求完成之前会陷入空白阻塞状态,
  };
}

export default ProductDetailPage;
