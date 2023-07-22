import React from "react";
import Calendar from "react-calendar";
import { useState } from "react";
import moment from "moment";
import Popup from "../Components/Popup";

const Home = () => {
  const [dateState, setDateState] = useState(new Date());
  const [open, setOpen] = useState(false);
  const changeDate = (e) => {
    setDateState(e);
  };
  const toggleModel = () => {
    setOpen(!open);
  };
  if (open) {
    document.body.classList.add("active-open");
  } else {
    document.body.classList.remove("active-open");
  }
  const data = [
    { date: "2023-07-01", status: "present" },
    { date: "2023-07-02", status: "leave" },
    { date: "2023-07-03", status: "leave" },
    { date: "2023-07-05", status: "present" },
    { date: "2023-07-07", status: "absent" },
    { date: "2023-07-09", status: "leave" },
    { date: "2023-07-10", status: "present" },
    { date: "2023-07-12", status: "absent" },
    { date: "2023-07-13", status: "present" },
    { date: "2023-07-15", status: "present" },
    { date: "2023-07-16", status: "leave" },
    { date: "2023-07-18", status: "absent" },

    // Add more data as needed
  ];

  const getTileClassName = ({ date }) => {
    const localDate = new Date(date);

    const utcDate = new Date(
      localDate.getTime() - localDate.getTimezoneOffset() * 60 * 1000
    );

    const isoDateString = utcDate.toISOString().split("T")[0];
    const leave = data.find((leave) => leave.date === isoDateString);
    if (leave) {
      // console.log(date, "dates");
      return leave.status === "absent"
        ? "absent"
        : leave.status === "present"
        ? "present"
        : "leave";
    }
    return "";
  };

  return (
    <>
      <div className="contents">
        {open && (
          <div>
            <p>
              Current selected date is{" "}
              <b>{moment(dateState).format("MMMM Do YYYY")}</b>
            </p>
          </div>
        )}
      </div>
      <Popup />
      <div className="calendar_head">
        <Calendar
          value={dateState}
          onChange={changeDate}
          onClickDay={toggleModel}
          tileClassName={getTileClassName}
          maxDate={new Date()}
          minDate={new Date()}
        />
      </div>
    </>
  );

  // return (
  //   <div className="calendar_head">
  //     <Calendar onChange={onchange} />
  //   </div>
  // );
};

export default Home;
