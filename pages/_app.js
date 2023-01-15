import Layout from "../components/layout/layout";
import Head from "next/head";

import "../styles/globals.css";
// 根组件入口
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* 这个文件里的head设置会应用于所有页面的head */}
      {/* 这个相当于HTML的元数据 */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
