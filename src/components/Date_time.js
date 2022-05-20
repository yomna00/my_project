import Appbar from "./Appbar";
import Stepper from "./Stepper";
import Date from "./Date";
import "../css/bootstrap.css";
import Paper from "./Paper";
import Time from "./Time";

const Date_time = () => {
  return (
    <div className="background">
      <Appbar />
      <Stepper className="mt" />
      <h1 className="ml">Date & Time selection</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <Date className="mt "></Date>
          </div>
          <div className="col-md-4">
            <Paper></Paper>
          </div>
        </div>
        <div className="col-md-8 mt mb">
          <Time className="mt mb"></Time>
        </div>
      </div>
    </div>
  );
};
export default Date_time;
