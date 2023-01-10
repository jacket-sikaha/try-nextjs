import { createContext, useState } from "react";

// context使用
// 1 先创建 context实例createContext
// 2 NotificationContext.Provider组件包裹需要数据通信的孙子组件
const NotificationContext = createContext({
  notification: null, // { title,message, status }
  showNotification: function () {},
  hideNotification: function () {},
});

export function NotificationContextProvider(props) {
  const [activeNotification, setActiveNotification] = useState();
  function showNotificationHandler(notificationData) {
    setActiveNotification(notificationData);
  }
  function hideNotificationHandler() {
    setActiveNotification(null);
  }
  // 运用类似props子传父的方式---传递分发一个函数给孙子组件，再函数调用来达到爷孙通信的目的
  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };
  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
