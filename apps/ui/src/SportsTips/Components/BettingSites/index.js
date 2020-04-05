import React, { useState, useEffect, useContext } from "react";
import { BettingScroll } from "./styles";
import { getBettingSites } from "./service";
import BettingSiteCard from "./bettingSiteCard";

export default function BettingSites() {
  const [sites, setSites] = useState([]);
  useEffect(() => {
    getBettingSites().then((sitesList) => setSites(sitesList));
  }, []);
  // sites.map((eachSite) => {
  //   console.log(eachSite.logo);
  // });
  return (
    <BettingScroll>
      {sites.map((eachState, id) => (
        <BettingSiteCard key={id} {...eachState} />
      ))}
    </BettingScroll>
  );
}
