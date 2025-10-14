import data from "./data.json";
import { filteredRender } from './render.js';

let dataset = [...data];
let currentFilter = "all"; //default filter

export function getDataset() {
    return dataset;
}

export function setDataset(newData) {
  dataset = newData;
}

export function getCurrentFilter() {
  return currentFilter;
}

export function filterExtensions(filter) {
  currentFilter = filter.toLowerCase();
  let filteredList = [];

  if (currentFilter === "active") {
    filteredList = dataset.filter(extension => extension.isActive === true);
  } else if (currentFilter === "inactive") {
    filteredList = dataset.filter(extension => extension.isActive === false);
  } else {
    filteredList = dataset;
  }

  filteredRender(filteredList);
}