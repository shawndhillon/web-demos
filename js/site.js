// index.js - purpose and description here
// Author: Your Name
// Date:



function loadSidebar() {
  fetch('sidebar.html')
    .then(response => response.text())
    .then(data => {
      const sidebarContainer = document.getElementById('sidebar-container');
      if (sidebarContainer) {
        sidebarContainer.innerHTML = data;
      }
    })
}

document.addEventListener('DOMContentLoaded', loadSidebar);


