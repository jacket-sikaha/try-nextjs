import ReactMarkdown from "react-markdown";
import Image from "next/image";
// 使用第三方库虽然开箱即用, 但是build后可能导致打包的文件过大, 不利于网站的运行;
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
// 解决方法  使用一些轻量化的库/看这个第三方库有无替代的轻量化方案
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";

// 对代码片段的支持语言进行声明
SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

function PostContent(props) {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    // 对于文件里的图片元素我们获取有关的图像数据，返回我们自定义的jsx组件来渲染
    // 报错的原因是md文件里非标题元素统一判定成段落元素p标签
    // next/image组件渲染的html是多个div包裹着img元素因此会有警告：p标签不能包裹div标签
    // img(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
    // 解决办法就是自定义段落的组件形式
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        console.log("image", image);
        return (
          // 全改成div包裹
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },

    // 自定义文件内的代码片段的jsx
    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1]; // className is something like language-js => We need the "js" part here
      return (
        // 代码高亮组件
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          // eslint-disable-next-line react/no-children-prop
          children={children}
        />
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      {/* 自定义md文件里的元素在前端的呈现形式 */}
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
      {/* <ReactMarkdown>{post.content}</ReactMarkdown> */}
    </article>
  );
}

export default PostContent;
