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
  Welcome,
  CourrseFor,
  Teachers,
} from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <Informaton />
      <Ready />
      {/* <Teachers /> */}
      <CourrseFor />
      <Employment />
      <StartLearning />
      <Educational />
      <Choice />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
