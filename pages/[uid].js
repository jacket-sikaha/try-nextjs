import React from "react";
function UserIdPage({ id }) {
  return <div>{id}</div>;
}

export default UserIdPage;

// 区别静态预渲染 对于动态路由情况就不需要额外配置 且也不会提前生成预渲染页面因为不知道具体的参数是多少
export async function getServerSideProps(context) {
  const { params } = context;
  const userId = params.uid;
  return {
    props: {
      id: "userId-" + userId,
    },
  };
}
