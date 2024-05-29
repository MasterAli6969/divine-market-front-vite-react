import AdvantagesLeft from "./advantages-left/AdvantagesLeft";
import AdvantagesRight from "./advantages-right/AdvantagesRight";

function AdvantagesPage() {
  return (
    <div className="row mx-0 mt-5 py-3 px-5">
      <div className="col-md-6 p-0">
        <AdvantagesLeft />
      </div>
      <div className="col-md-6 p-0">
        <AdvantagesRight />
      </div>
    </div>
  );
}

export default AdvantagesPage;
