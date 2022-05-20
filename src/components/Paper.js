import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import Alert from "./Alert";
import { AccordionDetails, Typography } from "@mui/material";
import "../css/bootstrap.css";
import { useRecoilState } from "recoil";
import { showserviceAtom } from "../atom";

export default function SimplePaper() {
  let [showservice] = useRecoilState(showserviceAtom);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          marginLeft: 1,
          width: 400,
          height: 300,
        },
      }}
    >
      <Paper elevation={3}>
        <div>
          <h2 className="ml2">Hair Salon</h2>
          <div className="ml2">
            <LocationOnSharpIcon />
            Norway, Oslo
          </div>
          <div className="ml2">
            <AddIcCallIcon />
            +4744226591
          </div>
        </div>
        <hr className="ml2"></hr>
        <Alert></Alert>
        <div>
          {showservice && (
            <AccordionDetails className="ml2">
              <Typography>
                Adult Cut
                <div className="ml2">
                  <div>
                    30 minutes
                    <span className="ml">$300</span>
                  </div>
                </div>
              </Typography>
            </AccordionDetails>
          )}
        </div>
      </Paper>
    </Box>
  );
}
