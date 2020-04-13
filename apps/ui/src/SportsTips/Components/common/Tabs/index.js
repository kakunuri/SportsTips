import React from "react";
import { TabsContainer, Tab } from "./styles";

function Tabs({ onClick, currentTab, setTab, tabs }) {
  return (
    <TabsContainer>
      {tabs.map(tab => {
        return (
          <Tab
            active={currentTab.value === tab.value}
            onClick={e => {
              if(onClick){
                onClick(tab, e)
              }
              else{
                setTab(tab);
              }
            }}
          >
            {tab.label}
          </Tab>
        );
      })}
    </TabsContainer>
  );
}

export default Tabs;
