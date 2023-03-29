// Old hamburger
  
  const toggleButton = document.getElementById('toggle-button');
  const dropdown = document.getElementById('dropdown');
  
  dropdown.style.display = 'none'
  
  toggleButton.addEventListener('click', () => {

    // Add transition
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
                <button type="button" class="section-btn">Media</button>
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
                <button type="button" class="section-btn">Media</button>
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
                <button type="button" class="section-btn">Media</button>
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
                <button type="button" class="section-btn">Media</button>
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
                <button type="button" class="section-btn">Media</button>
                <button type="button" class="section-btn move-btn">Move</button>
              </div>
            </div>
          `,
          contactus: `
          <div class="section">
            <h4 class="section-title">Contact us</h4>
            <p class="section-content">Add your : Phone, Email, Map, Calendly</p>
            <div class="section-buttons">
              <button type="button" class="section-btn layout-btn">Layout</button>
              <button type="button" class="section-btn delete-btn">Delete</button>
              <button type="button" class="section-btn">Media</button>
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
              <button type="button" class="section-btn">Media</button>
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
              <button type="button" class="section-btn">Media</button>
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
              <button type="button" class="section-btn">Media</button>
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

  // New intro.js

  function startTour() {
    introJs().start();
  }
  
  // Attach the function to a button or another event
  document.getElementById("start-tour-btn").addEventListener("click", startTour);
  

// Get the modal
var modal = document.getElementById("myModal");

// When the user clicks the button, open the modal 
function openModal(index) {
  modal.style.display = "block";
  let word = document.getElementById("modal-message");

  const modalContent = modal.querySelector('.modal-content');
  modalContent.style.animationName = 'modalOpen';
 
  switch(index) {

    case "doc":
      word.innerHTML = 
      ` 
      <h1>Project Documentation: WebGIG CMS</h1>
      <h2>Table of Contents</h2>
      <ul>
          <li><a href="#introduction">Introduction</a></li>
          <li><a href="#getting-started">Getting Started</a></li>
          <li><a href="#customizing-your-website">Customizing Your Website</a></li>
          <li><a href="#managing-content">Managing Content</a></li>
          <li><a href="#integrations">Integrations</a></li>
          <li><a href="#faqs">FAQs</a></li>
          <li><a href="#support">Support</a></li>
      </ul>

      <h2 id="introduction">Introduction</h2>
      <p>WebGIG CMS is a user-friendly content management system designed for professionals and gig workers who want to create a visually appealing and functional one-page website. With our simple CMS, you can easily manage and update your website's content without any coding knowledge. Our team at WebGIG is committed to creating the perfect website for you in less than 48 hours, allowing you to focus on growing your business.</p>
      <p>This documentation will guide you through the process of setting up and customizing your website using WebGIG CMS.</p>

      <h2 id="getting-started">Getting Started</h2>
      <h3>Signing Up</h3>
      <p>You can start building your website right away using WebGIG CMS without signing up for an account. Simply navigate to our website and access the CMS to begin customizing your site. When you're ready to submit your choices and make your website live, you'll be redirected to the payment and account creation pages. After completing these steps, your website will be up and running.</p>
      <h3>Choosing a Template</h3>
      <p>WebGIG CMS offers a variety of pre-designed templates to help you create an attractive and professional website. To choose a template, navigate to the "Templates" section in the CMS dashboard and select the one that best fits your needs.</p>

      <h2 id="customizing-your-website">Customizing Your Website</h2>
      <h3>Customizing the Design</h3>
      <p>You can easily customize the design of your website using the built-in design options in WebGIG CMS. Navigate to the "Design" section in the dashboard to adjust colors, fonts, and other design elements.</p>
      <h3>Adding Content</h3>
      <p>To add content to your website, navigate to the "Content" section in the CMS dashboard. Here, you can add, edit, and delete content sections, such as text, images, and videos. Simply click on the desired section type and fill in the required information.</p>
      <h2 id="managing-content">Managing Content</h2>
      <h3>Updating Your Website</h3>
      <p>You can update your website at any time by navigating to the "Content" section in the CMS dashboard. Make the desired changes and click "Save" to update your website.</p>
      <h3>Organizing Content</h3>
      <p>You can organize your website's content by reordering sections within the CMS. Simply click and drag the section you want to move, and drop it into the desired position. Don't forget to save your changes when you're done.</p>
      
      <h2 id="integrations">Integrations</h2>
      <p>WebGIG CMS supports various integrations with popular third-party services, such as Stripe for payment processing and Calendly for scheduling appointments. To add an integration, navigate to the "Integrations" section in the CMS dashboard and follow the instructions provided.</p>
  
      <h2 id="faqs">FAQs</h2>
      <p>If you have any questions about using WebGIG CMS, please consult our Frequently Asked Questions (FAQs) section. If you can't find the answer you're looking for, feel free to reach out to our support team.</p>
  
      <h2 id="support">Support</h2>
      <p>We're here to help! If you need assistance or have any questions, please don't hesitate to contact our support team. You can reach us through the "Contact Us" form on our website or by sending an email to support@example.com.</p>
  
      `
      break;

    default:
      // nothing
      break;
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {

  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    
    modal.style.display = "none";
  }
}

// Introduction

document.getElementById('styleDropdown').addEventListener('change', function() {
  var selectedText = this.options[this.selectedIndex].text;
  document.getElementById('selectedOption').innerText = selectedText;
});

// Productions/Services

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('addService').addEventListener('click', function() {
      var title = document.getElementById('serviceTitle').value;
      var description = document.getElementById('serviceDescription').value;
      var pricing = document.getElementById('servicePricing').value;

      var listItem = document.createElement('div');
      listItem.innerHTML = `
          <h5>${title}</h5>
          <p>${description}</p>
          <p>Pricing: ${pricing}</p><br>`;
      document.getElementById('servicesList').appendChild(listItem);

      // Reset input fields
      document.getElementById('serviceTitle').value = '';
      document.getElementById('serviceDescription').value = '';
      document.getElementById('servicePricing').value = '';
  });
});