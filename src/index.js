import './style.css';
import { initializeRender } from './render.js';
import { toggleTheme } from './render.js';
import { filterExtensions } from './filter.js';

// initial render
document.addEventListener('DOMContentLoaded', () => {
  initializeRender();
});

// toggle style
const styleButton = document.querySelector(".style-button");

styleButton.addEventListener("click", () => {
  toggleTheme();
});

// filter extensions via event delegation
const toggleContainer = document.querySelector(".extension-toggles-buttons");

toggleContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const selected = event.target.textContent.trim(); 
    filterExtensions(selected); 
  }
});