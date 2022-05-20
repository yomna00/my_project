import Appbar from "./components/Appbar";
import Stepper from "./components/Stepper";
import Paper from "./components/Paper";
import Accordion from "./components/Accordion";
import "./css/bootstrap.css";

const Firstpage = () => {
  return (
    <div className="background">
      <Appbar />
      <Stepper className="mt" />
      <h1 className="ml">Services</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <Accordion></Accordion>
          </div>
          <div className="col-md-4">
            <Paper></Paper>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Firstpage;
