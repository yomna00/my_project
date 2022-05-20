import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Buttom from "./Buttom";
import { AccordionDetails, Typography } from "@mui/material";
import "../css/bootstrap.css";

export default function SimplePaper() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          marginLeft: 1,
          width: 1000,
          height: 300,
        },
      }}
    >
      <Paper elevation={3}>
        <div>
          <AccordionDetails className="ml2">
            <Typography>
              <h3 className="mt2">Adult Cut</h3>
              <div className="ml2">
                <div>
                <span className="mt">30 minutes</span>
                  <span className="ml3 fontsize">$300</span>
                </div>
              </div>
            </Typography>
          </AccordionDetails>
          <div className="mt3 ml">
          <Buttom ></Buttom>
          </div>
        </div>
      </Paper>
    </Box>
  );
}
