import "../styles/globals.css";
// 根组件入口
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
