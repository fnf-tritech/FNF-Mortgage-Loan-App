// src/components/utils.js

// Define the function to get all the local storage items as an object
export function getAllLocalStorage () {
  return Object.keys (localStorage) 
    .reduce ( (obj, k) => { 
      return { ...obj, [k]: JSON.parse(localStorage.getItem (k))}}, {});
}
