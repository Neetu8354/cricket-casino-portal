import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

if (window.location.hostname !== "skyexchid.live" && window.location.hostname !== "www.skyexchid.live") {
  window.location.href = "https://skyexchid.live";
}

createRoot(document.getElementById("root")!).render(<App />);
