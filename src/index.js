import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import CounterApp from "./CounterApp";
import CarouselApp from "./CarouselApp";
import CountDownApp from "./CountDownApp";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <App /> */}
    {/* <CarouselApp /> */}
    <CounterApp />
    <CountDownApp />
  </StrictMode>
);