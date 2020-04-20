import React, { useState, useEffect, useContext } from "react";
import { BettingScroll } from "./styles";
import { getBettingSites } from "./service";
import BettingSiteCard from "./bettingSiteCard";
import { notifyFailure } from "../../../Components/Notifications";
import Loader from "../../../Components/common/Loader";
import { Card } from "./bettingSiteCard/styles";

export default function BettingSites() {
  const [sites, setSites] = useState([]);
  function dataPolling() {
    getBettingSites()
      .then((sitesList) => {
        setSites(sitesList);
        setTimeout(() => {
          dataPolling();
        }, 20000);
      })
      .catch(() => {
        setSites([]);
        notifyFailure("Failed to retrieve betting sites");
        setTimeout(() => {
          dataPolling();
        }, 100000);
      });
  }

  useEffect(() => {
    dataPolling();
  }, []);
  if (sites.length === 0) {
    return (
      <BettingScroll>
        <Card>
          <div style={{width:"10px",height:"10px"}}/>
          <Loader />
          <div style={{width:"10px",height:"10px"}}/>
          Loading Betting Sites...
          <div style={{width:"20px",height:"10px"}}/>
        </Card>
      </BettingScroll>
    );
  } else {
    return (
      <BettingScroll>
        {sites.map((eachState, id) => (
          <BettingSiteCard key={id} {...eachState} />
        ))}
      </BettingScroll>
    );
  }
}
