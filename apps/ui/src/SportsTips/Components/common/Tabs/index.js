import React,{useContext} from "react";
import { TabsContainer, Tab } from "./styles";
import { Context } from "../../../Store";

function Tabs({ onClick, currentTab, setTab, tabs }) {

  let { state } = useContext(Context);
  return (
    <TabsContainer theme={state.theme}>
      {tabs.map(tab => {
        return (
          <Tab
            theme={state.theme}
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
