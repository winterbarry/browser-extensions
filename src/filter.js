import data from "./data.json";
import { filteredRender } from './render.js';

let currentFilter = "";

export function filterExtensions (filter) {
    currentFilter = filter.toLowerCase();

    let filteredList = [];

    if (currentFilter === "active") {
        filteredList = data.filter(extension => extension.isActive === true);
    } else if (currentFilter === "inactive") {
        filteredList = data.filter(extension => extension.isActive === false);
    } else {
        filteredList = data;
    }

    console.log("Filtered list:", filteredList); 
    filteredRender(filteredList);
}