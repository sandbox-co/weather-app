import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import styled from "styled-components";
import "react-tabs/style/react-tabs.css";

import Weather from "./Weather";

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const Header = styled.div`
  padding: 20px;
  font-size: 24pt;
  font-weight: bold;
`;

const TabHeader = styled.div`
  font-weight: 200;
`;

const Container = styled.div`
  // padding: 20px;
`;

const TabHeaders = DAYS.map(day => (
  <Tab>
    <TabHeader>{day}</TabHeader>
  </Tab>
));

const TabPanels = DAYS.map(day => (
  <TabPanel>
    <Weather day={day} />
  </TabPanel>
));

class App extends Component {
  render() {
    return (
      <Container>
        <Header>My Cool Weather App</Header>
        <Tabs>
          <TabList>{TabHeaders}</TabList>

          {TabPanels}
        </Tabs>
      </Container>
    );
  }
}

export default App;
