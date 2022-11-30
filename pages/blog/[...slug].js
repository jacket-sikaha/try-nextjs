import { useRouter } from "next/router";
import React from "react";

function BlogPostsPage() {
  const { query } = useRouter();
  console.log("BlogPostsPage", query);
  return (
    <div>BlogPostsPage,这是一个以/xx/aa 。。。的方式传递多个参数的路由</div>
  );
}

export default BlogPostsPage;
