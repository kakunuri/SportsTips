import React,{useContext} from "react";
import { TipContainer, Sport,Text, Site, Odds, Timestamp, Status } from "./styles";
import { Context } from "../../../../../Store";
function TipRow({ tip }) {
    const {state} = useContext(Context);
  return (
    <TipContainer theme={state.theme} status={tip.status}>
    <Sport src={tip.sportImage}/>
      <Text theme={state.theme}>{tip.tip}</Text>
      <Site src={tip.site}/>
      <Odds>{tip.odds}</Odds>
      <Timestamp theme={state.theme}>{tip.timestamp}</Timestamp>
      <Status>{tip.status}</Status>
    </TipContainer>
  );
}
export default TipRow;
