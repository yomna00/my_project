import Date_time from "./components/Date_time";
import { Route, Routes } from "react-router-dom";
import "./css/bootstrap.css";
import Firstpage from "./Firstpage";
import Booking from "./components/Booking";

const App = () => {
  return (
    <Routes>
    <Route path="" element={<Firstpage />} />
    <Route path="/date" element={<Date_time />} />
    <Route path="/booking" element={<Booking />} />
  </Routes>
  );
};
export default App;
