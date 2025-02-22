import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { volumeData } from '../../constants/volumeObj.js';
import { translatedVolume } from "../../constants/volumeObj.js";
// import AdContainer from "../AdContainer/AdContainer.js";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VolumeCard from "../VolumeCard/VolumeCard.js";

import './ContentStyle.css';

export default function Content() {

    const [volumes, setvolumes] = useState(volumeData.slice(0).reverse());
    const [transVolumes, setTransVolumes] = useState(translatedVolume.slice(0).reverse());
    // console.log(volumes)
    // const [volumes, setvolumes] = useState({
    //     vol1: "",
    //     vol2: "",
    //     vol3: ""
    // })

    return (
      <>
        <div className="main-container">
          <div className="volume-container">
            <div className="card-container">
              {transVolumes.map((e) => {
                return (
                  <>
                    <VolumeCard
                      card={{ e }}
                      key={e.volumeNumber}
                      index={translatedVolume.indexOf(e)}
                    />
                  </>
                );
              })}
            </div>
            <div className="info-container">
              <strong>
                Volume 0 will be translated by January 5th. <br /> <br />
                Year 2 Volume 9 is estimated to release on february 25th, and
                trial version will be released early in february. Consider
                subscribing to the channel for more updates!
              </strong>
            </div>
          </div>
          <div className="accord-container">
              <Accordion className="accordion">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h1 className="previousVolume">Previous Volume</h1>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="link-container">
                    {volumes.map((vol) => {
                      return (
                        <>
                          <a
                            href={vol.ytlink}
                            className="volume-url"
                            style={{
                              background: `${
                                volumeData.indexOf(vol) % 2
                                  ? "rgba(245, 245, 245, 0.8)"
                                  : "rgba(255, 255, 255, 0.8)"
                              }`,
                            }}
                            target="_blank"
                            key={vol.volumeNumber} rel="noreferrer"
                          >
                            {vol.name}
                          </a>
                        </>
                      );
                      })}
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
        </div>
        <div></div>
      </>
    );
}