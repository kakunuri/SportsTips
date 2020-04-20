import { NotificationChip, MatchLabel, MatchName } from "./styles";
import React from "react";

export function prepareTabOption(tab) {
  return {
    label: (
      <MatchLabel>
        <MatchName>{tab.match}</MatchName>
        <NotificationChip>{tab.notifications}</NotificationChip>
      </MatchLabel>
    ),
    value: tab,
  };
}

export function prepareTabOptions(options) {
  return options.map((tab) => {
    return prepareTabOption(tab);
  });
}
export function computeNotifications(newMatchData, oldMatchData) {
  let matchWithNotifications = newMatchData.map((newMatch) => {
    let newTips = newMatch.tips.map((tip) => JSON.stringify(tip));
    let correspondingOldMatch = oldMatchData.find(
      (oldMatch) => oldMatch.match === newMatch.match
    );
    let oldTips = correspondingOldMatch
      ? correspondingOldMatch.tips.map((tip) => JSON.stringify(tip))
      : [];
    let newTipsCount = newTips.filter((tip) => oldTips.includes(tip)).length;
    newMatch.notifications = newTipsCount + 1;
    return newMatch;
  });
  return matchWithNotifications;
}
