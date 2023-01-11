import { createContext, useEffect, useState } from "react";

// context使用---如何封装一个可用的context实例组件来集中管理的范例  ！！！
// 1 先创建 context实例createContext
// 2 NotificationContext.Provider组件包裹需要数据通信的孙子组件
// 3 在所需要的孙子组件里使用 const { notification } = useContext(NotificationContext);
// 即可获取里面需要的属性/函数（通过调用里面的函数即可做到爷孙组件的数据通信）
const NotificationContext = createContext({
  notification: null, // { title,message, status }
  showNotification: function (notificationData) {},
  hideNotification: function () {},
});

export function NotificationContextProvider(props) {
  // 需要一个state存储并管理Context里的内容变化
  const [activeNotification, setActiveNotification] = useState();

  useEffect(() => {
    if (
      activeNotification &&
      (activeNotification.status === "success" ||
        activeNotification.status === "error")
    ) {
      const timer = setTimeout(() => {
        setActiveNotification(null);
      }, 3000);
      return () => {
        // 组件卸载前清除定时器，防止内存泄露
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  function showNotificationHandler(notificationData) {
    // 当其他组件调用该方法，将会引起整个组件的更新，从而更新context，将新context分发给其他组件
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
