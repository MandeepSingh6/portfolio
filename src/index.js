import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.js";

import { inject } from "@vercel/analytics";

inject();

const root = createRoot(document.getElementById("root"));
root.render(<App />);
