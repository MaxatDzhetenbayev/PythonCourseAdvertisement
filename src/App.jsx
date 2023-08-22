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
import { WelcomeSlider } from "./components/Welcome/Slider/WelcomeSlider";
import { Available } from "./components/Available/Available";
import { Salary } from "./components/Salary/Salary";

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
