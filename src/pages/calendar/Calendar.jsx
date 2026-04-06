import "./Calendar.css";
import Abdulbosit from "../../data/Abdulbosit";
import { useState } from "react";

const Calendar = () => {
  const calendarData = Abdulbosit.find((item) => item.page === "calendar");

  const [hovered, setHovered] = useState(false);

  return (
    <div className="calender">
      <div className="calender__top">
        <h2>{calendarData.title}</h2>
      </div>

      <div className="calender__bottom">
        <div className="calender__bottom--left">
          <div className="bottom__left--top">
            <button>{calendarData.buttonText}</button>
            <h3>{calendarData.goingTo}</h3>
          </div>

          <div className="bottom__left--cards">
            {calendarData.events.map((item) => (
              <div className="event__card" key={item.id}>
                <img className="event__card--img" src={item.img} alt="" />

                <div className="event__info">
                  <h4>{item.title}</h4>
                  <p>{item.time}</p>
                  <p>{item.location}</p>
                  <span>{item.country}</span>
                </div>

                <div className="event__people">
                  <span>+{item.people}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bottom__left--bottom">
            <button>See More</button>
          </div>
        </div>

        <div className="calender__bottom--right">
          <div className="bottom__right--top">
            <h4>Today</h4>
            <h2>October 2026</h2>

            <div className="bottom--right--top__selects">
              <button>Day</button>
              <button>Week</button>
              <button className="active">Month</button>
            </div>
          </div>

          <div
            className="bottom__right--calendar"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <img src={calendarData.calendarImage} alt="calendar" />

            {hovered && (
              <div className="calendar__hoverCard">
                <img
                  src={calendarData.hoverCard.image}
                  alt=""
                  className="hover__img"
                />

                <div className="hover__content">
                  <h4>{calendarData.hoverCard.title}</h4>
                  <p>{calendarData.hoverCard.company}</p>
                  <span>{calendarData.hoverCard.time}</span>
                  <p>{calendarData.hoverCard.location}</p>

                  <div className="hover__people">
                    {calendarData.hoverCard.peopleImgs.map((img, i) => (
                      <img key={i} src={img} alt="" />
                    ))}
                    <span>+{calendarData.hoverCard.peopleCount}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
