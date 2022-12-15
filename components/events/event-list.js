import React from "react";
import EventItem from "./event-item";
import styles from "./event-list.module.css";
function EventList(props) {
  const { items } = props;
  return (
    <ul className={styles.list}>
      {items.map((val) => (
        <EventItem key={val.id} {...val} />
      ))}
      {/* <div className="item2">ttttttttt</div> */}
    </ul>
  );
}

export default EventList;
