import "./style.css";

import { homePage } from "./home.js";
import { menuPage } from "./menu.js";
import { contactPage } from "./contact.js"
import { placeHolder } from "./placeholder.js"

placeHolder();

const menuButton = document.getElementById("menu");

menuButton.addEventListener("click", function () {
    const pageContent = document.getElementById("content");
    pageContent.textContent = "";

    menuPage();
});

const contactButton = document.getElementById("contact");

contactButton.addEventListener("click", function () {
    const pageContent = document.getElementById("content");
    pageContent.textContent = "";

    contactPage();
});

const homeButton = document.getElementById("home");

homeButton.addEventListener("click", function () {
    const pageContent = document.getElementById("content");
    pageContent.textContent = "";

    homePage();
});