import * as React from "react";
import { Component } from "react-simplified";
import { Card, Row, Column, Form, Button } from "../widgets.tsx";
import { createHashHistory } from "history";
import rdbService from "../services/RDB-service.js";

const history = createHashHistory();

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
  render() {
    return (
      <div className="container">
        <Card title="Coming Soon"></Card>
      </div>
    );
  }
}

export default HomePage;
