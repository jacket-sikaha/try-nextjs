import React from "react";
import { getAllEvents } from "../../dummy-data";
import Button from "../ui/button";
import styles from "./event-search.module.css";
function EventSearch(props) {
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
  const events = getAllEvents();

  function submitHandler(event) {
    event.preventDefault();
    const [selectedYear, selectedMonth] = event.target;
    // const selectedYear = yearInputRef.current.value;
    // const selectedMonth = monthInputRef.current. value;
    console.log(selectedYear.value, selectedMonth.value);
    props.onSearch(selectedYear.value, selectedMonth.value);
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
