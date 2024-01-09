import * as React from "react";
import { Component } from "react-simplified";
import { Card, Row, Column, Form, Button } from "../widgets.tsx";
import { createHashHistory } from "history";
import rdbService from "../services/RDB-service.js";

const history = createHashHistory();

interface SearchState {
  value: string;
}

class HomePage extends Component {
  async mounted() {
    try {
      const data = await rdbService.fetchRDB();
      console.log("Fetched data:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    return 0;
  }

  searchState: SearchState = {
    value: "",
  };

  render() {
    return (
      <div className="container">
        <Card title="Coming Soon"></Card>
        <Column>
          <Form.Label>Form Header??</Form.Label>
        </Column>
        <Column>
          <Form.Input
            type="text"
            style={{ width: "20vw" }}
            value={this.searchState.value}
            onChange={(event) => {
              this.searchState.value = event.target.value;
              console.log(event.target.value);
            }}
          />
        </Column>
        <Column>
          <Button.Light onClick={() => console.log("clicked")}>
            //how the fuck do i style this thing?? 
          </Button.Light>
        </Column>
      </div>
    );
  }
}

export default HomePage;
