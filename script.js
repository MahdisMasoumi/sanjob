"use strict";
document
  .getElementById("searchInput")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevents the form from actually submitting
      document.getElementById("searchForm").submit(); // Submits the form
    }
  });
