import ReactDOM from "react-dom";

import classes from "./notification.module.css";

function Notification(props) {
  const { title, message, status } = props;

  let statusClasses = "";

  if (status === "success") {
    statusClasses = classes.success;
  }

  if (status === "error") {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  // Portal 提供了一种将子节点渲染到存在于父组件以外 DOM 节点的方案。
  // 在 CSS 中，我们可以使用 position: fixed 等定位方式，让元素从视觉上脱离父元素。
  // 在 React 中，Portal 直接改变了组件的挂载方式，不再是挂载到上层父节点上，而是可以让用户指定一个挂载节点。

  // 利用next的document特性,
  //   我们可以给我们的html文件挂载一个root节点之外的新dom节点,
  //   这样我们利用Portal就可以能让嵌套在 root 下的 jsx 子元素脱离出去
  //   子组件通过 createPortal API 挂载到我们设置好的 div 下面
  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById("notifications")
  );
}

export default Notification;
