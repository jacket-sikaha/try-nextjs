import Layout from "../components/layout/layout";
import "../styles/globals.css";
// 根组件入口
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
