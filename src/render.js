import data from "./data.json";

// return images from ./assets/images
const images = require.context("./assets/images", false, /\.(png|svg|jpg|jpeg|gif)$/);

export function initializeRender() {
  const container = document.querySelector(".extensions-list");
  container.innerHTML = "";

  data.forEach(extension => {
    const extensionDiv = document.createElement("div");
    extensionDiv.classList.add("extension-item");

    // grab and store current extension logo
    const logoSrc = images(`./${extension.logo}`);

    extensionDiv.innerHTML = `
      <img src="${logoSrc}" alt="${extension.name} logo" class="extension-logo"/>
      <div class="extension-info">
        <h3>${extension.name}</h3>
        <p>${extension.description}</p>
        <p>Status: <strong>${extension.isActive ? "Active" : "Inactive"}</strong></p> 
      </div>
    `;

    container.appendChild(extensionDiv);
  });
}
