import "./Invoice.css";
import Abdulbosit from "../../data/Abdulbosit";
import { FaPaperPlane, FaPrint } from "react-icons/fa";

const Invoice = () => {
  const data = Abdulbosit.find((item) => item.page === "invoice");

  return (
    <div className="invoice">
      <h2 className="invoice__title">{data.title}</h2>

      <div className="invoice__card">
        <div className="invoice__top">
          <div className="invoice__block">
            <p className="invoice__label">Invoice From :</p>
            <h3 className="invoice__name">{data.from.name}</h3>
            <p className="invoice__text">{data.from.address}</p>
          </div>

          <div className="invoice__block">
            <p className="invoice__label">Invoice To :</p>
            <h4 className="invoice__name">{data.to.name}</h4>
            <p className="invoice__text">{data.to.address}</p>
          </div>

          <div className="invoice__dates">
            <p className="invoice__date">
              <span className="invoice__label">Invoice Date :</span>{" "}
              {data.invoiceDate}
            </p>
            <p className="invoice__date">
              <span className="invoice__label">Due Date :</span> {data.dueDate}
            </p>
          </div>
        </div>

        <div className="invoice__table">
          <div className="invoice__table-head">
            <span className="invoice__th">Serial No.</span>
            <span className="invoice__th">Description</span>
            <span className="invoice__th">Quantity</span>
            <span className="invoice__th">Base Cost</span>
            <span className="invoice__th">Total Cost</span>
          </div>

          {data.items.map((item) => (
            <div className="invoice__table-row" key={item.id}>
              <span className="invoice__td">{item.id}</span>
              <span className="invoice__td">{item.description}</span>
              <span className="invoice__td">{item.quantity}</span>
              <span className="invoice__td">${item.baseCost}</span>
              <span className="invoice__td">${item.total}</span>
            </div>
          ))}
        </div>

        <div className="invoice__bottom">
          <div className="invoice__total">
            <span className="invoice__total-text">Total</span>
            <span className="invoice__total-value">= ${data.total}</span>
          </div>

          <div className="invoice__actions">
            <button className="invoice__btn invoice__btn--print">
              <FaPrint />
            </button>
            <button className="invoice__btn invoice__btn--send">
              {data.sendText}
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
