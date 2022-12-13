import React from "react";
import styles from "./EventDetailItem.module.css";
function EventDetailItem(props) {
  const { title, image, date, location, id } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <li className={styles.item}>
      <img src={image} alt={title} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <time>{humanReadableDate}</time>
          </div>

          <div className={styles.address}>
            <time>{location}</time>
          </div>
        </div>
      </div>
    </li>
  );
}

export default EventDetailItem;
