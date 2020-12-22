import checkBrowser from "./browser-check.js";
import { pickButtonHandler } from "./pick-button-handler.js";

window.onload = checkBrowser();

document
  .getElementById("pick-img-button")
  .addEventListener("click", pickButtonHandler);