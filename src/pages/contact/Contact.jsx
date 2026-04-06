import "./Contact.css";
import Abdulbosit from "../../data/Abdulbosit";

const Contact = () => {
  const data = Abdulbosit.find((item) => item.page === "contact");

  return (
    <div className="contact">
      <div className="contact__wrapper">
        <div className="contact__top">
          <h2>{data.title}</h2>
          <button>{data.button}</button>
        </div>

        <div className="contact__grid">
          {data.users.map((user) => (
            <div className="contact__card" key={user.id}>
              <img src={user.img} alt="" className="contact__img" />

              <div className="contact__info">
                <h4>{user.name}</h4>
                <p>{user.email}</p>

                <button className="contact__btn">✉ Message</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
