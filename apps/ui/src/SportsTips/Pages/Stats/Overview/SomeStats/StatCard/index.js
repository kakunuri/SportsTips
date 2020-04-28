import React from "react";
import { StatCardContainer ,StatLabel,StatValue} from "./styles";

function StatCard({label,value}) {
  return <StatCardContainer>
    <StatLabel>{label}</StatLabel>
    <StatValue>{value}</StatValue>
  </StatCardContainer>;
}
export default StatCard;