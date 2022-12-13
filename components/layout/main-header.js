import Link from "next/link";
import React, { Fragment } from "react";

function MainHeader() {
  return (
    <header>
      <div>
        <Link href={link}></Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link href={link}></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
