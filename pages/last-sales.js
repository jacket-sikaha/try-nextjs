import React, { useState, useEffect } from "react";
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());

function LastSalesPage() {
  const [sales, setSales] = useState();
  //   const [isLoading, setIsLoading] = useState(false);

  // 使用useEffect，next js也会进行预渲染，渲染返回默认最基本的东西
  //   useEffect(() => {
  //     setIsLoading(true);
  //     fetch("https://nextjs-course-8689e-default-rtdb.firebaseio.com/qqq.json")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         const tmp = [];
  //         for (const key in data) {
  //           if (Object.hasOwnProperty.call(data, key)) {
  //             const element = data[key];
  //             tmp.push({ id: key, a: element.a, b: element.b });
  //           }
  //         }
  //         setSales(tmp);
  //         setIsLoading(false);
  //       });
  //   }, []);

  //   if (isLoading) {
  //     return <div>Loading.......</div>;
  //   }
  //   if (!sales || sales.length === 0) {
  //     return <div>no data</div>;
  //   }

  const { data, error } = useSWR(
    "https://nextjs-course-8689e-default-rtdb.firebaseio.com/qqq.json",
    fetcher
  );
  useEffect(() => {
    console.log("data", data);
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
  if (!data || !sales) return <div>loading...</div>;
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

export default LastSalesPage;
