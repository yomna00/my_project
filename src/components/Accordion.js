import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Checkbox } from "@mui/material";
import { useRecoilState } from "recoil";
import { showserviceAtom } from "../atom";

export default function SimpleAccordion() {
  let [showservice, setshowservice] = useRecoilState(showserviceAtom);
  const handleChange = () => {
    setshowservice(!showservice);
  };

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Haircuts</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h4>Adult Cut</h4>
            <div className="ml">
              <div>
                30 minutes
                <span className="ml-p">
                  $300
                  <Checkbox onChange={handleChange} />
                </span>
              </div>
              <div>Looking for a quick haircut? This is the one for you.</div>
            </div>
          </Typography>
        </AccordionDetails>
        <hr className="ml2 mr"></hr>
        <AccordionDetails>
          <Typography>
            <h4>Cut & Shampoo</h4>
            <div className="ml">
              <div>
                50 minutes
                <span className="ml-p ml">
                  $400
                  <Checkbox />
                </span>
              </div>
              <div>
                This cut includes a shampoo service with some of our favorite
                professional products
              </div>
            </div>
          </Typography>
        </AccordionDetails>
        <hr className="ml2 mr"></hr>
        <AccordionDetails>
          <Typography>
            <h4>Cut, Shampoo & Basic Style</h4>
            <div className="ml">
              <div>
                45 minutes
                <span className="ml-p">
                  $500
                  <Checkbox />
                </span>
              </div>
              <div>
                After this blow-dry and brush-finished cut, you'll be ready for
                anything
              </div>
            </div>
          </Typography>
        </AccordionDetails>
        <hr className="ml2 mr"></hr>
        <AccordionDetails>
          <Typography>
            <h4>Cut, Shampoo & Full Style</h4>
            <div className="ml">
              <div>
                20 minutes
                <span className="ml-p">
                  $360
                  <Checkbox />
                </span>
              </div>
              <div>
                This cut option offers styling with hot tools to complete your
                new look
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>All-Over Color</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h4>Permanent</h4>
            <div className="ml">
              <div>
                30 minutes
                <span className="ml-p">
                  $129
                  <Checkbox />
                </span>
              </div>
              <div>
                (for gray coverage or going lighter or darker): Receive a
                professional hair color service performed by one of our experts
                to cover gray or to lighten or darken your natural hair color
              </div>
            </div>
          </Typography>
        </AccordionDetails>
        <hr className="ml2 mr"></hr>
        <AccordionDetails>
          <Typography>
            <h4>Semi</h4>
            <div className="ml">
              <div>
                50 minutes
                <span className="ml-p ml">
                  $400
                  <Checkbox />
                </span>
              </div>
              <div>
                Looking for a new color, but not ready for a total commitment?
                Ask your stylist if semi-permanent is right for you.
              </div>
            </div>
          </Typography>
        </AccordionDetails>
        <hr className="ml2 mr"></hr>
        <AccordionDetails>
          <Typography>
            <h4>Specialty</h4>
            <div className="ml">
              <div>
                45 minutes
                <span className="ml-p">
                  $400
                  <Checkbox />
                </span>
              </div>
              <div>
                Make a bold change with an on-trend color choice, including
                dimensional color, multiple colors, ombre/sombre, balayage,
                block color, color melt, and more.
              </div>
            </div>
          </Typography>
        </AccordionDetails>
        <hr className="ml2 mr"></hr>
        <AccordionDetails>
          <Typography>
            <h4>Gray Blending</h4>
            <div className="ml">
              <div>
                20 minutes
                <span className="ml-p">
                  $500
                  <Checkbox />
                </span>
              </div>
              <div>
                Take the amount of gray in your hair down a notch, while
                maintaining a more natural look with this popular service.
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Waxing</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h4>Brow Wax</h4>
            <div className="ml">
              <div>
                30 minutes
                <span className="ml-p">
                  $129
                  <Checkbox />
                </span>
              </div>
              <div>
                This service removes hair and exfoliates the skin, making
                make-up application smoother and helps open the look of your
                eyes with a natural brow arch.
              </div>
            </div>
          </Typography>
        </AccordionDetails>
        <hr className="ml2 mr"></hr>
        <AccordionDetails>
          <Typography>
            <h4>Facial Waxing</h4>
            <div className="ml">
              <div>
                45 minutes
                <span className="ml-p ml">
                  $400
                  <Checkbox />
                </span>
              </div>
              <div>Creates smoothness along the lip-line or chin.</div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
