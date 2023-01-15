import Document, { Html, Head, Main, NextScript } from "next/document";
// 这里的Head组件只能在这个文件里使用不同于next/head的组件 , 且不要对其有修改
// 使用前提是Html, Head, Main,NextScript 这4个是必须引入的,
// Main组件不要在此处添加应用程序逻辑或自定义 CSS（如styled-jsx）
// 该文件可以在原来html元素基础上设置一个属性 或添加额外的属性 添加额外的元素

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <div id="notifications"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
