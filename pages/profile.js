import { getSession } from "next-auth/client";

import UserProfile from "../components/profile/user-profile";

// 没有通过身份验证 跳转到登陆页面
function ProfilePage() {
  return <UserProfile />;
}

// 静态预渲染和服务端预渲染的选择取决于数据的更新频率和是否需要访问请求对象;
// getServerSideProps对于每个请求进来都需要进行身份验证
export async function getServerSideProps(context) {
  // 优化点
  // 当我们登陆成功的时候，跳转到一些页面，页面的部分组件使用了useSession
  // 可能造成重复调用该方法发送请求，进行了多余的验证
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default ProfilePage;
