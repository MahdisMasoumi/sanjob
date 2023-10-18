"use strict";
document
  .getElementById("searchInput")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("searchForm").submit();
    }
  });
debugger;
const openPopupButton = document.getElementById("openPopupButton");
const closePopupButton = document.getElementById("closePopupButton");
const popup = document.getElementById("popup");
const postContent = document.getElementById("postContent");
const submitPostButton = document.getElementById("submitPost");
const postContainer = document.getElementById("postContainer");

// Load existing posts from localStorage
const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];
existingPosts.forEach(content => {
  createPost(content);
});

openPopupButton.addEventListener("click", () => {
  popup.style.display = "block";
});

closePopupButton.addEventListener("click", () => {
  popup.style.display = "none";
  postContent.value = "";
});

submitPostButton.addEventListener("click", () => {
  const content = postContent.value;
  if (content.trim() !== "") {
    createPost(content);

    // Save the new post to localStorage
    existingPosts.push(content);
    localStorage.setItem("posts", JSON.stringify(existingPosts));

    // Clear the input and close the popup
    postContent.value = "";
    popup.style.display = "none";
  }
});

function createPost(content) {
  const post = document.createElement("div");
  post.className = "post-new";
  post.innerText = content;
  postContainer.appendChild(post);
}
