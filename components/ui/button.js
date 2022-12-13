import Link from "next/link";
import React from "react";
import styles from "./button.module.css";

function Button({ link, children }) {
  return (
    <Link href={link}>
      <div className={styles.btn}>{children}</div>
    </Link>
  );
}

export default Button;
