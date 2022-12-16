import React from "react";

function userProfilePage({ username }) {
  return <div>{username}</div>;
}

export default userProfilePage;

export async function getServerSideProps(context) {
  const { params, req, res } = context;
  console.log(req);
  console.log(res);
  return {
    props: {
      username: "Max",
    },
  };
}
