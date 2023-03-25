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

  // Sections

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
  
      function updateSectionContent() {
        const layoutButtons = document.querySelectorAll(".layout-btn");
  
        layoutButtons.forEach((button) => {
          button.addEventListener("click", function () {
            const currentSection = this.closest(".section");
            const contentElement = currentSection.querySelector(".section-content");
            const newContent = prompt("Enter new content for the section:", contentElement.textContent);
  
            if (newContent !== null) {
              contentElement.textContent = newContent;
            }
          });
        });
      }
  
      function deleteSection() {
        const deleteButtons = document.querySelectorAll(".delete-btn");
  
        deleteButtons.forEach((button) => {
          button.addEventListener("click", function () {
            const currentSection = this.closest(".section");
  
            if (confirm("Are you sure you want to delete this section?")) {
              currentSection.remove();
            }
          });
        });
      }
  
      function addSection() {
        const addSectionBtn = document.getElementById("add-section-btn");
        const addSectionDropdown = document.getElementById("add-section-dropdown");
    
        const sectionTemplates = {
          intro: `
            <div class="section">
              <h4 class="section-title">Intro</h4>
              <p class="section-content">Content for the intro section...</p>
              <div class="section-buttons">
                <button type="button" class="section-btn layout-btn">Layout</button>
                <button type="button" class="section-btn delete-btn">Delete</button>
                <button type="button" class="section-btn">Add Media</button>
                <button type="button" class="section-btn move-btn">Move</button>
              </div>
            </div>
          `,
          'products-services': `
            <div class="section">
              <h4 class="section-title">Products/Services</h4>
              <p class="section-content">Content for the products/services section...</p>
              <div class="section-buttons">
                <button type="button" class="section-btn layout-btn">Layout</button>
                <button type="button" class="section-btn delete-btn">Delete</button>
                <button type="button" class="section-btn">Add Media</button>
                <button type="button" class="section-btn move-btn">Move</button>
              </div>
            </div>
          `,
          review: `
            <div class="section">
              <h4 class="section-title">Review</h4>
              <p class="section-content">Content for the review section...</p>
              <div class="section-buttons">
                <button type="button" class="section-btn layout-btn">Layout</button>
                <button type="button" class="section-btn delete-btn">Delete</button>
                <button type="button" class="section-btn">Add Media</button>
                <button type="button" class="section-btn move-btn">Move</button>
              </div>
            </div>
          `,
          blog: `
            <div class="section">
              <h4 class="section-title">Blog</h4>
              <p class="section-content">Content for the blog section...</p>
              <div class="section-buttons">
                <button type="button" class="section-btn layout-btn">Layout</button>
                <button type="button" class="section-btn delete-btn">Delete</button>
                <button type="button" class="section-btn">Add Media</button>
                <button type="button" class="section-btn move-btn">Move</button>
              </div>
            </div>
          `,
          faq: `
            <div class="section">
              <h4 class="section-title">FAQ</h4>
              <p class="section-content">Content for the FAQ section...</p>
              <div class="section-buttons">
                <button type="button" class="section-btn layout-btn">Layout</button>
                <button type="button" class="section-btn delete-btn">Delete</button>
                <button type="button" class="section-btn">Add Media</button>
                <button type="button" class="section-btn move-btn">Move</button>
              </div>
            </div>
          `,
          footer: `
          <div class="section">
            <h4 class="section-title">Footer</h4>
            <p class="section-content">Content for the footer section...</p>
            <div class="section-buttons">
              <button type="button" class="section-btn layout-btn">Layout</button>
              <button type="button" class="section-btn delete-btn">Delete</button>
              <button type="button" class="section-btn">Add Media</button>
              <button type="button" class="section-btn move-btn">Move</button>
            </div>
          </div>
        `,
        payment: `
          <div class="section">
            <h4 class="section-title">Payment</h4>
            <p class="section-content">Content for the payment section...</p>
            <div class="section-buttons">
              <button type="button" class="section-btn layout-btn">Layout</button>
              <button type="button" class="section-btn delete-btn">Delete</button>
              <button type="button" class="section-btn">Add Media</button>
              <button type="button" class="section-btn move-btn">Move</button>
            </div>
          </div>
        `,
        calendly: `
          <div class="section">
            <h4 class="section-title">Calendly</h4>
            <p class="section-content">Content for the calendly section...</p>
            <div class="section-buttons">
              <button type="button" class="section-btn layout-btn">Layout</button>
              <button type="button" class="section-btn delete-btn">Delete</button>
              <button type="button" class="section-btn">Add Media</button>
              <button type="button" class="section-btn move-btn">Move</button>
            </div>
          </div>
        `,
      };
    
        function createSectionFromTemplate(template) {
          const div = document.createElement("div");
          div.innerHTML = template.trim();
          return div.firstChild;
        }
    
        function initSection(section) {
          section.querySelector(".layout-btn").addEventListener("click", function () {
            const contentElement = section.querySelector(".section-content");
            const newContent = prompt("Enter new content:", contentElement.textContent);
            if (newContent !== null) {
              contentElement.textContent = newContent;
            }
          });
        
          section.querySelector(".delete-btn").addEventListener("click", function () {
            if (confirm("Are you sure you want to delete this section?")) {
              section.remove();
            }
          });
        
          section.querySelector(".move-btn").addEventListener("click", function () {
            if (selectedSection) {
              selectedSection.classList.remove("selected");
            }
            selectedSection = section;
            section.classList.add("selected");
          });
        }
    
        addSectionBtn.addEventListener("click", function () {
          addSectionDropdown.classList.toggle("hidden");
        });
    
        addSectionDropdown.addEventListener("change", function () {
          const selectedTemplate = this.value;
    
          if (sectionTemplates[selectedTemplate]) {
            const newSection = createSectionFromTemplate(sectionTemplates[selectedTemplate]);
            initSection(newSection);
            sectionList.appendChild(newSection);
          }
    
          addSectionDropdown.value = "";
          addSectionDropdown.classList.add("hidden");
        });
      }
    
      moveSection();
      updateSectionContent();
      deleteSection();
      addSection();
    }
  });
  
  