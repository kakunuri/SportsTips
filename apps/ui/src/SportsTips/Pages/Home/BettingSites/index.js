import React, { useState, useEffect, useContext } from "react";
import { BettingScroll } from "./styles";
import { getBettingSites } from "./service";
import BettingSiteCard from "./bettingSiteCard";
import { notifyFailure } from "../../../Components/Notifications";

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
  return (
    <BettingScroll>
      {sites.map((eachState, id) => (
        <BettingSiteCard key={id} {...eachState} />
      ))}
    </BettingScroll>
  );
}
