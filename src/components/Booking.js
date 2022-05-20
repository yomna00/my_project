import Appbar from "./Appbar";
import Stepper from "./Stepper";
import Paper2 from "./Paper2";
import "../css/bootstrap.css";
import Paper from "./Paper";
import Mybooking from "./Mybooking";


const Booking = () => {
  return (
    <div className="background">
      <Appbar />
      <Stepper className="mt" />
      <h1 className="ml">Finalizing</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <Paper2></Paper2>
          </div>
          <div className="col-md-4">
            <Paper></Paper>
          </div>
        </div>
      </div>
      <div className="ml">
          <Mybooking></Mybooking>      
      </div>
    </div>
  );
};
export default Booking;
