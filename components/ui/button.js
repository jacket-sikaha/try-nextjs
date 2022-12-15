import Link from "next/link";
import React from "react";
import styles from "./button.module.css";

function Button({ link, children, onclick }) {
  if (link) {
    return (
      <Link href={link}>
        <div className={styles.btn}>{children}</div>
      </Link>
    );
  }

  return (
    <button className={styles.btn} onClick={onclick}>
      {children}
    </button>
  );
}

export default Button;
