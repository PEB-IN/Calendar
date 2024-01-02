import React from "react";
import Calendar from "react-calendar";
import { useState } from "react";
import moment from "moment";
import Popup from "../Components/Popup";
import profie from "../assets/images/image_4.png";
import info from "../assets/images/info.png";
import info_active from "../assets/images/info_active.png";
import head_info from "../assets/images/head_info.png";

const Home = () => {
  const [dateState, setDateState] = useState(new Date());
  const [modalShow, setModalShow] = React.useState(false);

  const changeDate = (e) => {
    setDateState(e);
  };
  const toggleModel = () => {
    setModalShow(!modalShow);
  };
  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };
  const onClickDay = (value, event) => {
    if (isToday(value)) {
      toggleModel();
    }
  };
  if (modalShow) {
    document.body.classList.add("active-open");
  } else {
    document.body.classList.remove("active-open");
  }
  const data = [
    { date: "2023-12-01", status: "absent" },
    { date: "2023-12-03", status: "leave" },
    { date: "2023-12-05", status: "present" },
    { date: "2023-12-12", status: "leave" },
    { date: "2023-12-06", status: "leave" },
    { date: "2023-12-10", status: "present" },
    { date: "2023-12-12", status: "absent" },
    { date: "2023-12-13", status: "present" },
    { date: "2023-12-15", status: "present" },
    { date: "2023-12-16", status: "leave" },
    { date: "2023-12-19", status: "leave" },
    { date: "2023-12-29", status: "leave" },

    // Add more data as needed
  ];
  const LeaveContent = ({ type, isCurrentDate, children }) => {
    return (
      <>
        <div>{isCurrentDate && <p className="today_text">Today</p>}</div>
        {children}
        <div className="schedule_container">
          <div className="track_schedule">
            <p className="track_text">{type}</p>
          </div>
          <div>
            {type === "Leave" && (
              <img src={info} alt="info" width="20px" height="20px" />
            )}
            {isCurrentDate && (
              <img src={info_active} alt="info" width="20px" height="20px" />
            )}
          </div>
        </div>
      </>
    );
  };

  const tileContent = ({ date }) => {
    const leave = getTileClassName({ date });
    // const isCurrentDate = moment(date).isSame(moment(dateState), "day");
    const isToday = (date) => {
      const today = new Date();
      return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
      );
    };

    if (leave) {
      let type;
      switch (leave) {
        case "absent":
          type = "Absent";
          break;
        case "present":
          type = "Marked Present";
          break;
        case "leave":
          type = "Leave";

          break;
        default:
          type = "Working";
      }

      return (
        <LeaveContent type={type} isCurrentDate={isToday(date)}>
          {/* {isCurrentDate && <p className="today_text">Today</p>} */}
        </LeaveContent>
      );
    }
  };
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
    return "working";
  };

  return (
    <>
      <div>
        <Popup show={modalShow} onHide={() => setModalShow(false)} />
      </div>
      <div className="heading_section">
        <div>
          <div className="d-flex align-items-center gap-3">
            <h2>Attendance</h2>
            <img
              src={head_info}
              alt="info"
              width="22px"
              height="22px"
              style={{ cursor: "pointer" }}
            />
          </div>
          <p style={{ fontSize: "14px", color: "#383838" }}>
            Use calendar to mark your attendance and track schedules
          </p>
        </div>
        <div>
          <i class="fa-solid fa-plus"></i>
          <p>Mark Attendance</p>
        </div>
      </div>

      <div className="calendar_head">
        <div>
          <ul className="marked_label">
            <li style={{ color: "#00ba34", fontWeight: 500, fontSize: "15px" }}>
              Marked Present
            </li>
            <li style={{ color: "#0085ff", fontWeight: 500, fontSize: "15px" }}>
              Working
            </li>
            <li style={{ color: "#e92c2c", fontWeight: 500, fontSize: "15px" }}>
              Absent
            </li>
            <li style={{ color: "#ff9f2d", fontWeight: 500, fontSize: "15px" }}>
              Leave
            </li>
          </ul>
        </div>

        <Calendar
          value={dateState}
          onChange={changeDate}
          onClickDay={onClickDay}
          tileClassName={(date) => getTileClassName(date)}
          tileContent={(date) => tileContent(date)}
          maxDate={new Date()}
          // minDate={new Date()}
        />
      </div>

      {/* <div className="chat_bot">
        <div className="bot_button">
          <p className="botbtn_text">Contact us</p>
          <div className="chat_imgcontainer">
            <img className="chatbot_img" src={profie} alt="profile_name" />
          </div>
        </div>
      </div> */}
    </>
  );

  // return (
  //   <div className="calendar_head">
  //     <Calendar onChange={onchange} />
  //   </div>
  // );
};

export default Home;
