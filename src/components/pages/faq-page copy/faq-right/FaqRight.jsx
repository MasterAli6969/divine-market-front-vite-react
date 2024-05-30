import AccorArrowIcon from "../../../../assets/icons/AccorArrowIcon.svg";
import { faqRightData } from "../data";
import "./faq_right.css";

function FaqRight() {
  return (
    <div className="accor_div">
      {!faqRightData || faqRightData.length === 0 ? (
        <h1>Ooops, server error, please wait...</h1>
      ) : (
        faqRightData.map((item) => {
          return (
            <div key={item.id} className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${item.id}`}
                    aria-expanded="true"
                    aria-controls={`collapse${item.id}`}
                  >
                    <div className="custom_accordion_header">
                      <h4>
                        {item.id}. {item.accorTitle}
                      </h4>
                      <img src={AccorArrowIcon} />
                    </div>
                  </button>
                </h2>
                <div
                  id={`collapse${item.id}`}
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="accordion_body">
                      <div className="accordion_body_line" />
                      <div className="accordion_body_text">
                        <h5>{item.accorItem}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default FaqRight;
