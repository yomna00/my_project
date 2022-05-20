import axios from "axios";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import { useRecoilState } from "recoil";
import { AccordionDetails, Typography } from "@mui/material";

const Mybooking = () => {
  // let [savebooking, setsavebooking] = useState(false);
  // const handleChange = () => {
  //   setshowservice(savebooking);
   let data;
  const booking = () => {
    const url = `https://fci-back-end.herokuapp.com/bookings`;
    const onbookingresponse = (Response) => {
      let data = Response;
      console.log(data);
      return data;
    };
    axios.get(url).then(onbookingresponse);
  };
  return (
    <div>
      <Box sx={{ "& button": { ml: 4, mt: 4, mb: 4 } }}>
        <div>
          <Button variant="contained" size="large" onClick={booking}>
            My Booking
          </Button>
          {data}
          <AccordionDetails className="ml2">
            <Typography>{data}</Typography>
          </AccordionDetails>
        </div>
      </Box>
    </div>
  );
};
export default Mybooking;
