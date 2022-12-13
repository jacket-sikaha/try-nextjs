import { useRouter } from "next/router";
import React from "react";

function FilteredEventsPage() {
  const { query } = useRouter();
  console.log("FilteredEventsPage", query);
  return (
    <div>
      FilteredEventsPage,这是一个以/xx/aa 。。。的方式传递多个参数的路由,
    </div>
  );
}

export default FilteredEventsPage;
