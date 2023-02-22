import { SessionProvider } from "next-auth/react";
// 避免在支持服务器端和客户端呈现的页面上检查两次会话。

import Layout from "../components/layout/layout";
import "../styles/globals.css";
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
