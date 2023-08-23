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
  Available,
  Salary,
  WelcomeSlider,
} from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Header />
      <WelcomeSlider />
      {/* <Welcome /> */}
      <Available />
      {/* <Informaton /> */}
      <Ready />
      {/* <Teachers /> */}
      {/* <CourrseFor /> */}
      <Salary />
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
