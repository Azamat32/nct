// Get the tab buttons and tab content elements
var tabButtons = document.getElementsByClassName("tab-button");
var tabContents = document.getElementsByClassName("tab-content");

// Attach click event listeners to the tab buttons
for (var i = 0; i < tabButtons.length; i++) {
  tabButtons[i].addEventListener("click", function (event) {
    var tab = this.getAttribute("data-tab");
    openTab(event, tab);
  });
}

function openTab(evt, tabName) {
  // Hide all tab content elements
  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }

  // Remove "active" class from all tab buttons
  for (var i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
  }

  // Show the selected tab content and mark the button as active
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}

// Set the default tab to be opened
document.getElementById("tab1").style.display = "block";
document.getElementsByClassName("tab-button")[0].classList.add("active");

let tabTitle = document.querySelector(".tab_container_title");

tabTitle.addEventListener("click", () => {
  document.querySelector(".tab_container_inner").classList.toggle("active");
});
