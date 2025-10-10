import data from "./data.json";

// return images from ./assets/images
const images = require.context("./assets/images", false, /\.(png|svg|jpg|jpeg|gif)$/);

export function initializeRender() {

  // toggle theme based on user preference
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.body.classList.toggle("dark-mode", prefersDark);
  document.body.classList.toggle("light-mode", !prefersDark);

  // render extension cards
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

export function toggleTheme() {
  // switch to light-mode
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
  } 
  // else, switch to dark-mode
  else {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
  }
}

export function filteredRender(filteredList) {

  const container = document.querySelector(".extensions-list");
  container.innerHTML = "";

  if (filteredList.length === 0) {
    container.innerHTML = "<p>No extensions found.</p>";
    return;
  }

  // loop through list and render
  filteredList.forEach(extension => {
    const extensionDiv = document.createElement("div");
    extensionDiv.classList.add("extension-item");

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
  })
}