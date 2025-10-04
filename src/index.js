import './style.css';
import { initializeRender } from './render.js';
import { toggleTheme } from './render.js';

document.addEventListener('DOMContentLoaded', () => {
  initializeRender();
});

const styleButton = document.querySelector(".style-button");

styleButton.addEventListener("click", () => {
  toggleTheme();
});