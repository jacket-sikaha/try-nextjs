import Link from "next/link";

import Logo from "./logo";
import classes from "./main-navigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      {/* 当您传递给它的孩子不是纯文本时，如果您传递自己的组件，或链接的任何其他 */}
      {/* HTML内容， */}
      {/* 默认情况下，链接不会呈现锚标记。如果要呈现锚标记，则在Link标签下另外用a标签包裹logo标签 */}
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
