import React from "react";
import { Button, Card } from "@material-ui/core";
import Costumers from "./components/Costumers";

function App() {
  return (
    <>
      <Button variant="contained" color="primary">
        João Bosco Junior
      </Button>
      <Costumers />
    </>
  )
}

export default App;
