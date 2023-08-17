import React from "react";

import {
  Choice,
  Educational,
  Employment,
  Footer,
  Header,
  Informaton,
  Ready,
  StartLearning,
  Teachers,
  Welcome,
} from "./components";

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <Informaton />
      <Ready />
      <Teachers />
      <Employment />
      <StartLearning />
      <Educational />
      <Choice />
      <Footer />
    </>
  );
}

export default App;
