import "./Calendar.css";
import Abdulbosit from "../../data/Abdulbosit";

const Calendar = () => {
  const calendarData = Abdulbosit.find((item) => item.page === "calendar");

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
                <div className="dot" style={{ background: item.color }}></div>

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

          <div className="bottom__right--calendar">
            <img src={calendarData.calendarImage} alt="calendar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
