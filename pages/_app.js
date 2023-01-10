import Layout from "../components/layout/layout";
import "../styles/globals.css";
import Notification from "../components/ui/notification";
import { NotificationContextProvider } from "../store/notification-context";
// 根组件入口
function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Component {...pageProps} />
        <Notification title="Test" message="This is a test." status="error" />
      </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;
