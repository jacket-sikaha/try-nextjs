import { Provider } from "next-auth/client";
// 避免在支持服务器端和客户端呈现的页面上检查两次会话。

import Layout from "../components/layout/layout";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
