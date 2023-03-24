// Old hamburger
  
  const toggleButton = document.getElementById('toggle-button');
  const dropdown = document.getElementById('dropdown');
  
  dropdown.style.display = 'none'
  
  toggleButton.addEventListener('click', () => {
    console.log("Allo, je clique.")
    // Add transition...
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
  });
  
  const navLinks = document.querySelector('.navlinks');
  
  navLinks.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      navLinks.classList.remove('open');
      const sectionId = event.target.getAttribute('href');
      const section = document.querySelector(sectionId);
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });

  // Move

  document.addEventListener("DOMContentLoaded", function () {
    const sectionList = document.querySelector(".section-list");
  
    if (sectionList) {
      let selectedSection = null;
  
      // Helper function to insert a node after a reference node
      function insertAfter(newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
      }
  
      function moveSection() {
        const moveButtons = document.querySelectorAll(".move-btn");
  
        moveButtons.forEach((button) => {
          button.addEventListener("click", function () {
            if (selectedSection) {
              selectedSection.classList.remove("selected");
            }
  
            const currentSection = this.closest(".section");
  
            if (selectedSection && selectedSection !== currentSection) {
              if (currentSection.compareDocumentPosition(selectedSection) & Node.DOCUMENT_POSITION_FOLLOWING) {
                sectionList.insertBefore(selectedSection, currentSection);
              } else {
                insertAfter(selectedSection, currentSection);
              }
              selectedSection.classList.remove("selected");
              selectedSection = null;
            } else {
              selectedSection = currentSection;
              selectedSection.classList.add("selected");
            }
          });
        });
  
        sectionList.addEventListener("click", function (event) {
          if (selectedSection && event.target.classList.contains("section-list")) {
            sectionList.appendChild(selectedSection);
            selectedSection.classList.remove("selected");
            selectedSection = null;
          }
        });
      }
  
      moveSection();
    }
  });
  
  