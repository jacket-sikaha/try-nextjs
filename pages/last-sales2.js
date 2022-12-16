import React, { useState, useEffect } from "react";
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());
// 预渲染与客户端请求渲染相结合---后端数据更新的时候useSWR会自动帮我们渲染新的数据，
// 但一开始加载我们则会采用预渲染提供的数据展示页面
function LastSalesPage2(props) {
  const [sales, setSales] = useState(props.sales);

  const { data, error } = useSWR(
    "https://nextjs-course-8689e-default-rtdb.firebaseio.com/qqq.json",
    fetcher
  );
  useEffect(() => {
    if (data) {
      const tmp = [];
      for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
          const element = data[key];
          tmp.push({ id: key, a: element.a, b: element.b });
        }
      }
      setSales(tmp);
    }
  }, [data]);

  if (error) return <div>failed to load</div>;
  if (!data && !sales) return <div>loading...</div>;
  return (
    <ul>
      {sales.map((val) => {
        return (
          <li key={val.id}>
            {val.a}-----{val.b}
          </li>
        );
      })}
    </ul>
  );
}

export default LastSalesPage2;

export async function getStaticProps() {
  const response = await fetch(
    "https://nextjs-course-8689e-default-rtdb.firebaseio.com/qqq.json"
  );
  const data = await response.json();

  const tmp = [];
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      const element = data[key];
      tmp.push({ id: key, a: element.a, b: element.b });
    }
  }
  console.log(" ", data);
  return {
    props: {
      sales: tmp,
    },
    revalidate: 10,
  };
}
