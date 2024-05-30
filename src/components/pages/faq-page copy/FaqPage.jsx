import FaqLeft from "./faq-left/FaqLeft";
import FaqRight from "./faq-right/FaqRight";

function FaqPage() {
  return (
    <div className="row mx-0 mt-5 py-3 px-5">
      <div className="col-md-6 p-0">
        <FaqLeft />
      </div>
      <div className="col-md-6 p-0">
        <FaqRight />
      </div>
    </div>
  );
}

export default FaqPage;
