import React from "react";
import { getAllEvents } from "../../helpers/api-util";
import Button from "../ui/button";
import styles from "./event-search.module.css";
function EventSearch({ events, onSearch }) {
  const month = new Array(12);
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  function submitHandler(event) {
    event.preventDefault();
    const [selectedYear, selectedMonth] = event.target;
    // const selectedYear = yearInputRef.current.value;
    // const selectedMonth = monthInputRef.current. value;
    onSearch(selectedYear.value, selectedMonth.value);
  }
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="year">Year</label>
          <select id="year">
            {events.map((val, index) => {
              return (
                <option key={val.id}>{new Date(val.date).getFullYear()}</option>
              );
            })}
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor="month">Month</label>
          <select id="month">
            {month.map((val, index) => {
              return (
                <option key={index} value={index}>
                  {month[index]}
                  {/* {month[new Date(`2022-${index}-1`).getMonth()]} */}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <Button onclick={() => {}}>find events</Button>
    </form>
  );
}

export default EventSearch;

// 只有page里的路由组件才会调用 其余无效
export async function getStaticProps(context) {
  const events = await getAllEvents();
  console.log(222222222);
  return {
    props: {
      events,
    },
    revalidate: 60, // 每60s有新的请求进来重新生成该页面
  };
}
